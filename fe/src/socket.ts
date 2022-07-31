import io from 'socket.io-client'
import { storage } from 'utils'
import {DOMAIN} from './constant'
const token = storage.getToken()
const socket = io(DOMAIN , {
  auth: {
    token
}
})
socket.on('connect' , () => {
  console.log('connected');
})

export default socket