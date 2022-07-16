import 'config'
import http from 'http'
import app from './app'
import 'utils/connectDB'
const server = http.createServer(app)
server.listen(Config.PORT , () => {
  console.log(`Server listen on ${Config.PORT}`);
  
})