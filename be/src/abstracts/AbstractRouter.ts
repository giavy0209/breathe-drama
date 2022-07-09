import { Router, Request, Response, NextFunction } from "express";
import { IUser } from "interfaces";
import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'
import { AbstractController } from "abstracts";


interface IValidationError {
    [key: string]: {
        message: string
        reportCode?: string
    }
}
export default abstract class AbstractRouter<I, C extends AbstractController<I, any>> {
    router: Router = Router()
    routes: {
        param?: string,
        method: string,
        authorized?: boolean
        ref?: (req: Request, res: Response) => void,
        validate?: any[],
    }[] = []
    prefix: string
    user: IUser
    controller: C
    constructor(prefix: string,) {
        this.prefix = prefix
    }
    regisRouter: () => void = () => {
        this.routes.forEach(({
            ref,
            authorized = true,
            method,
            param = '',
            validate = [],
        }) => {
            const methodName = method.toLowerCase() as 'get' | 'post' | 'put' | 'patch' | 'delete'
            const ags = []
            if (authorized) {
                ags.push(this.isAuthorized.bind(this))
            }
            if (validate.length > 0) {
                ags.push(...validate);
                ags.push(this.isValidateError.bind(this));
            }
            if(methodName === 'get') {
                ags.push(this.checkPagination)
            }
            if (ref) {
                ags.push(ref.bind(this.controller))
            } else {
                ags.push(this.controller[methodName].bind(this.controller))
            }
            const routePath = `/${this.prefix}${param}`

            this.router[methodName](routePath, ...ags)
        })
    }
    async isAuthorized(req: Request, res: Response, next: NextFunction) {
        if (
            !req.headers ||
            !req.headers.authorization ||
            !req.headers.authorization.split(' ')[0] ||
            !req.headers.authorization.split(' ')[1] ||
            req.headers.authorization.split(' ')[0] !== 'Bearer'
        ) {
            return res.status(401).send({ msg: 'Not auth' })
        }

        try {
            let token = req.headers.authorization.split(' ')[1]
            const payload = jwt.verify(token, global.Config.JWT_SECRET) as IUser
            this.user = payload
            this.controller.getInstance(this.user)
            req.user = payload
            return next()
        } catch (error) {
            return this.advancedError(res, 401, error)
        }

    }

    checkPagination(req: Request, _: Response, next: NextFunction) {
        let page = Number(req.query.page)
        let skip = Number(req.query.skip)
        let limit = Number(req.query.limit)
        if (Number.isNaN(limit)) {
            limit = 10
        }
        if (!Number.isNaN(page)) {
            skip = (page - 1) * limit
        }
        if (Number.isNaN(skip)) {
            skip = 0
        }
        req.pagin = {
            skip,
            limit
        }
        next()
    }

    isValidateError(req: Request, res: Response, next: NextFunction) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            this.advancedError(res, 400, {
                validate: {
                    message: 'Missing param'
                }
            })
        } else {
            next()
        }
    }

    advancedError(res: Response, status: number, error: IValidationError) {
        res.status(status).send(error)
    }

}

