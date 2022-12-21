import mysql2 from 'mysql2/promise';
import {DB_DATABASE,
        DB_PASSWORD,
        DB_USER} from './config.js';


export const pool = mysql2.createPool({
    database:DB_DATABASE,
    user:DB_USER,
    password:DB_PASSWORD
})