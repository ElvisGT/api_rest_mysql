import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 8081;
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || 'elvisgt99';
const DB_DATABASE = process.env.DB_DATABASE || 'companydb';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 3306;

export {PORT,
        DB_USER,
        DB_DATABASE,
        DB_PASSWORD,
        DB_HOST,
        DB_PORT}