import express from 'express'
import routes from 'routes'
import cors from 'cors'
import { errorHandlers } from 'utils'
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true, limit : '100mb'}))
app.use(routes)
app.use(errorHandlers.internalServerError)  
app.use(errorHandlers.PageNotFound)

export default app