import {pool} from '../db.js';


const getEmployees = (req,res) => {
    res.json({
        msg:"Obteniendo empleados"
    })
}

const createEmployee = (req,res) => {
    res.json({
        msg:"Creando empleados"
    })
}

const updateEmployee = (req,res) => {
    res.json({
        msg:"Actualizando empleados"
    })
}

const deleteEmployee = (req,res) => {
    res.json({
        msg:"Borrando empleados"
    })
}


export {getEmployees,
        createEmployee,
        updateEmployee,
        deleteEmployee};