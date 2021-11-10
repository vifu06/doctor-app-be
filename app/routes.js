import doctorsRouter from './api/controllers/doctors/router';
import appointmentsRouter from './api/controllers/appointments/router';
import slotRouter from './api/controllers/slots/router';

export default function routes(app) {
    app.use('/api/doctors', doctorsRouter);    
    app.use('/api/appointment/', appointmentsRouter);
    app.use('/api/slot/',slotRouter);
};