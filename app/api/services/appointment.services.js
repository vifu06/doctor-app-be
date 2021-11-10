import Database from "../config/db.config";

export class AppointmentService {
    db = Database.db;

    async createAppointment(data) {
        try {
            let create;
            let appointment = {};

            appointment.doctor = data.doctor;
            appointment.patientName = data.patientName;
            appointment.patientGender = data.patientGender;
            appointment.patientAge = data.patientAge;
            appointment.patientContact = data.patientContact;
            appointment.date = data.date;
            appointment.slot = data.slot;
            appointment.status = data.status;

            create = await this.db.collection("appointments").insertOne(appointment);
            return {status: 200, content: create};   
        } catch (error) {
            console.log(error);
            return {status:400, error: error};
        }
    }

    async listAppointments(id,query) {
        try {
            let appointments = await this.db.collection("appointments").find({
                "doctor":id,
                "status":query.status,
                "date":query.date
            }).toArray();
            return {status:200,result:appointments};  
        } catch (error) {
            console.log(error);
            return {status:400, error: error};
        }
    }
}

export default new AppointmentService();