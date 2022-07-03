import express from 'express'
import routes from 'routes'
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true, limit : '100mb'}))
app.use(routes)

export default app