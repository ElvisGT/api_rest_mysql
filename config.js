import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 8081;
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || 'elvisgt99';
const DB_DATABASE = process.env.DB_DATABASE || 'companydb';

export {PORT,
        DB_USER,
        DB_DATABASE,
        DB_PASSWORD}