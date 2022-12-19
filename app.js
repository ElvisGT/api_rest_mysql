import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 8081;

app.get('/',(req,res) => {
    res.json({
        msg:"obteniendo empleados"
    })
})

app.put('/',(req,res) => {
    res.json({
        msg:"actualizando empleados"
    })
})

app.delete('/',(req,res) => {
    res.json({
        msg:"eliminando empleados"
    })
})

app.post('/',(req,res) => {
    res.json({
        msg:"creando empleados"
    })
})

app.listen(port,() => {

    console.log("Server corriendo en el puerto:",port);

})