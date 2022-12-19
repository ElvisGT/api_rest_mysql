import express from 'express';
import dotenv from 'dotenv';
import employeesRouter from './routes/employees.routes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8081;
const api_version = '/api/v1';
const paths = {
    employees:'/employees'
}

//router
app.use(api_version + paths.employees,employeesRouter);

app.listen(port,() => {

    console.log("Server corriendo en el puerto:",port);

})