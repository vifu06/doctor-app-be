import doctorService from "../../services/doctors.service";
import responseHandler from "../../middlewares/response.handler";

export class DoctorController {

    async listDoctors(req,res) {
        try {
            let doctorsList = await doctorService.listDoctors();
            if(doctorsList.status == 200) {
                let result ={status:200,content:doctorsList.result}
                responseHandler.respond(req,res,result);
            } else {
                responseHandler.respond(req,res,doctorsList);    
            }
        } catch (error) {
            responseHandler.respond(req,res,error);
        }
    }

    async getDoctor(req,res) {
        try {
            let doctor = await doctorService.getDoctorById(req.params.id);
            if (doctor.status == 200) {
                let result ={status:200,content:doctor.result};
                responseHandler.respond(req,res,result);   
            } else {
                responseHandler.respond(req,res,doctor);    
            }
        } catch(error) {
            responseHandler.respond(req,res,error);
        }
    }

    async getDoctorAppointments(req,res){
        try {
            console.log("try block")
            let doctor = await doctorService.getDoctorsAppointments();
            if(doctor.status == 200){
                let result = {status:200,content:doctor.result};
                responseHandler.respond(req,res,result);
            } else {
                responseHandler.respond(req,res,doctor);
            }
        } catch (error) {
            responseHandler.respond(req,res,error);
        }
    }
}

export default new DoctorController();