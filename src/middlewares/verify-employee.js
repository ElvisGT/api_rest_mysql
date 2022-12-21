import { pool } from '../../db.js';

export const veriryID = async(req,res,next) => {
  const {id} = req.params;

  const [employee] = await pool.query("SELECT * FROM employee where id = ?",[id]);

  if(employee.length === 0){
    return res.status(404).json({
      msg:"No existe el empleado"
    })
  }

  next();
}

export const veriryName = async(req,res,next) => {
  const {name} = req.body;
  const lowerName = name?.toLowerCase();
  const isEmployee = await pool.query("SELECT * FROM employee where name = ?",[lowerName]);
  
  if(isEmployee[0].length > 0){
      return res.status(400).json({
          msg:"El nombre del empleado ya existe"
      })
  }
  next();
}