import supertest from 'supertest'
import server from '../src/index'
const request = supertest(server)
export default request