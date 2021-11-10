import * as express from 'express';
import doctorController from './doctors.controller';

export default express
  .Router()
  .get('/list',doctorController.listDoctors)
  .get('/get/:id',doctorController.getDoctor)
  .get('/appointments',doctorController.getDoctorAppointments);