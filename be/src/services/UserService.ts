import { AbstractService } from "abstracts"
import { IUser } from "interfaces"

export default class UserService extends AbstractService<IUser>  {
    async test () {
        console.log(this.user);
        
    }
}