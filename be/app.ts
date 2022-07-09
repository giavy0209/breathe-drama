import express from 'express'
import routes from 'routes'
import { errorHandlers } from 'utils'
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true, limit : '100mb'}))
app.use(routes)
app.use(errorHandlers.internalServerError)  
app.use(errorHandlers.PageNotFound)

export default app