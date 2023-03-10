import express from 'express';
import employeesRouter from './routes/employees.routes.js';
import notfoundRouter from './routes/notfound.routes.js';
import {swaggerDoc} from './swagger/index.js';


const app = express();
const api_version = '/api/v1';
const paths = {
    employees:'/employees'
}

//middlewares
app.use(express.json());
swaggerDoc(app);


//router
app.use(api_version + paths.employees,employeesRouter);
app.use('*',notfoundRouter);


export default app;