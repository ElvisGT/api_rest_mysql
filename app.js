import express from 'express';
import dotenv from 'dotenv';
import {pool} from './db.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8081;

app.get('/employees', async (req,res) => {
    const [result] = await pool.query("SELECT 1 + 1 as result");
    
    res.json(result[0]);
})

app.put('/employees',(req,res) => {
    res.json({
        msg:"actualizando empleados"
    })
})

app.delete('/employees',(req,res) => {
    res.json({
        msg:"eliminando empleados"
    })
})

app.post('/employees',(req,res) => {
    res.json({
        msg:"creando empleados"
    })
})

app.listen(port,() => {

    console.log("Server corriendo en el puerto:",port);

})