import * as express from 'express';
import slotController from './slot.controller';

export default express
    .Router()
    .get("/list",slotController.list)
    .post("/create",slotController.createSlot);