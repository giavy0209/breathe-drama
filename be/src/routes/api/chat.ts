import { AbstractRouter } from 'abstracts'
import { ChatController } from 'controllers'
import path from 'path'
const filename = path.basename(__filename)
const ext = path.extname(filename)
const param = filename.replace(ext, '')


export default class ChatRouter extends AbstractRouter<ChatController> {
  constructor() {
    super(param, ChatController)
    this.routes = [
      {
        param: '',
        method: 'GET',
        ref: this.controller.get
      },
      {
        param: '',
        method: 'POST',
        ref: this.controller.post
      },
    ]
  }
}
