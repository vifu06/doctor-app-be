import * as express from 'express';
import appointmentController from './appointment.controller';

export default express
    .Router()
    .get("/list/:id",appointmentController.listAppointments)
    .post("/create",appointmentController.createAppointment);