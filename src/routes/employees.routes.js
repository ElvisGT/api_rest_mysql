import {Router} from 'express';
import { getEmployees,
        createEmployee,
        deleteEmployee,
        updateEmployee, 
        getEmployeeID} from '../controllers/employees.controller.js';

import {veriryID,veriryName} from '../middlewares/verify-employee.js';


const router = Router();

router.get('/',getEmployees)

router.get('/:id',[veriryID],getEmployeeID)

router.post('/',[veriryName],createEmployee)

router.put('/:id',[veriryID,veriryName],updateEmployee)

router.delete('/:id',[veriryID],deleteEmployee)



export default router;