import {pool} from '../db.js';


const getEmployees = async(req,res) => {
    const [results] = await pool.query('SELECT * FROM employee');
    const total = results.length;

    res.json({
        total,
        results
    })
}

const getEmployeeID = async(req,res) => {
    const {id} = req.params;
    const [employee] = await pool.query("SELECT * FROM employee where id = ?",[id]);


    res.status(200).json({
        employee
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

const updateEmployee = async (req,res) => {
    const id = req.params.id;
    const {name,salary} = req.body;
   
    await pool.query('UPDATE employee set name = ?,salary = ? where id = ?;',[name,salary,id])
    
    res.json({
        ok:true,
        msg:"Actualizado correctamente"
    })
}

const deleteEmployee = async (req,res) => {
    const id = req.params.id;
    await pool.query('DELETE FROM employee where id = ?',[id]);

    res.json({
        msg:"Eliminado exitosamente"
    })
}


export {getEmployees,
        getEmployeeID,
        createEmployee,
        updateEmployee,
        deleteEmployee};