import { AbstractController } from "abstracts";
import { DATA_FOUND } from "constant";
import { Request, Response } from "express";
import { IChat } from "interfaces";
import { Chats, } from "models";
import { ChatService } from "services";
import { ResponseResult } from "utils";

export default class ChatController extends AbstractController<IChat, ChatService, Chats> {
  constructor() {
    super(Chats, ChatService)
  }
  async get (req : Request , res : Response) {
    const service = this.createService(req.user)
    const { data, total } = await service.find({}, 0, 99,'user')
    res.send(new ResponseResult({
      data,
      total,
      message: DATA_FOUND
    }))
  }
  async post (req : Request , res : Response) {
    const {content} = req.body
    const service = this.createService(req.user)
    const data = await service.post({content})
    res.send(new ResponseResult({
      data,
      message: 'Chat successfully'
    }))
  }
}

