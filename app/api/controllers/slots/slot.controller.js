import slotService from "../../services/slot.service";
import responseHandler from "../../middlewares/response.handler";

export class SlotController {

    async createSlot(req, res) {
        try {
            let create = await slotService.createSlot(req.body);
            if(create.status == 200) {
                responseHandler.respond(req,res,create);
            } else {
                responseHandler.respond(req,res,create);    
            }
        } catch (error) {
            console.log(error)
            let result = {status:400,error:error}
            responseHandler.respond(req,res,result);
        }
    }

    async list(req, res) {
        try {
            let list = await slotService.listSlots(req.query);
            if(list.status == 200) {
                responseHandler.respond(req,res,list);
            } else {
                responseHandler.respond(req,res,list);
            }
        } catch (error) {
            console.log(error)
            let result = {status:400,error:error}
            responseHandler.respond(req,res,result);
        }
    }

}

export default new SlotController();