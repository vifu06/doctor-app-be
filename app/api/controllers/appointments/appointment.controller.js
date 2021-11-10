import appointmentService from "../../services/appointment.services";
import responseHandler from "../../middlewares/response.handler";

export class AppointmentController {
    async createAppointment(req, res){
        try {
            let create = await appointmentService.createAppointment(req.body);
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

    async listAppointments(req,res) {
        try {
            let appointments = await appointmentService.listAppointments(req.params.id,req.query);
            if (appointments.status == 200) {
                let result ={status:200,content:appointments.result};
                responseHandler.respond(req,res,result);   
            } else {
                responseHandler.respond(req,res,appointments);    
            }
        } catch (error) {
            console.log(error)
            let result = {status:400,error:error}
            responseHandler.respond(req,res,result);
        }
    }
}

export default new AppointmentController();