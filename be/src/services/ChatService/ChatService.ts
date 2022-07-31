import { AbstractService } from "abstracts"
import { IChat } from "interfaces"
import io from "../../../socket"
import { IPostInput } from "./interface"
export default class ChatService extends AbstractService<IChat>  {
  async post ({content} : IPostInput) {
    const data = await this.model.create({
      user : this.user._id,
      content
    })
    await this.model.populate(data, 'user')
    io.emit('chat' , data)
    return data
  }
}