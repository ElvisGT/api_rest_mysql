import {pool} from '../db.js';


const getEmployees = async(req,res) => {
    const [results] = await pool.query('SELECT * FROM employee');
    const total = results.length;

    res.json({
        total,
        results
    })
}

const createEmployee = async(req,res) => {
    const {name,salary} = req.body;
    const lowerName = name.toLowerCase();
    const isEmployee = await pool.query("SELECT * FROM employee where name = ?",[lowerName]);
    
    if(isEmployee[0].length > 0){
        return res.status(400).json({
            msg:"El nombre del empleado ya existe"
        })
    }
    
    await pool.query("INSERT INTO employee(name,salary) VALUES (?,?)",[name,salary]) 
    res.json({
        ok:true,
        msg:"Creado exitosamente"
    })
}

const updateEmployee = async (req,res) => {
    const id = req.params.id;
    const {name,salary} = req.body;
    const lowerName = name.toLowerCase();
    const isEmployee = await pool.query("SELECT * FROM employee where name = ?",[lowerName]);
    
    if(isEmployee[0].length > 0){
        return res.status(400).json({
            msg:"El nombre del empleado ya existe"
        })
    }
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
        createEmployee,
        updateEmployee,
        deleteEmployee};