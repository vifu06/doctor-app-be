import { ObjectId } from "bson";
import Database from "../config/db.config";

export class DoctorService {
    db = Database.db;

    async listDoctors(){
        try {
            let doctors = await this.db.collection("doctors").find().toArray();
            return {status:200,result:doctors};        
        } catch (error) {
            console.log(error)
            return {status:400,error:error};
        }
    }

    async getDoctorById(id){
        try {
            let doctor = await this.db.collection("doctors").find({"_id":ObjectId(id)}).toArray();
            return {status:200,result:doctor};   
        } catch (error) {
            console.log(error)
            return {status:400,error:error}
        }
    }

    async getDoctorsAppointments(){
        try {
            let doctor = await this.db.collection("doctors").aggregate([
                {
                    $lookup:{
                        from: 'appointments',
                        localField:"_id",
                        foreignField:"doctor",
                        as: 'appointments'
                    }
                }]).toArray();
            return {status:200,result:doctor}
        } catch (error) {
            console.log(error)
            return {status:400,error:error}
        }
    }

}

export default new DoctorService();