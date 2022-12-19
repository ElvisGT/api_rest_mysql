import {pool} from '../db.js';


const getEmployees = async(req,res) => {
    const [results] = await pool.query('SELECT * FROM employee');

    res.json({
        results
    })
}

const createEmployee = async(req,res) => {
    const {name,salary} = req.body;
    await pool.query("INSERT INTO employee(name,salary) VALUES (?,?)",[name,salary]) 
    res.json({
        ok:true,
        msg:"Creado exitosamente"
    })
}

const updateEmployee = (req,res) => {
    res.json({
        msg:"Actualizando empleados"
    })
}

const deleteEmployee = async (req,res) => {
    const id = req.params.id;
    const employee = await pool.query('DELETE FROM employee where id = ?',[id]);

    res.json({
        employee
    })
}


export {getEmployees,
        createEmployee,
        updateEmployee,
        deleteEmployee};