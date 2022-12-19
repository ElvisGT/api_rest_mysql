import mysql2 from 'mysql2/promise';

export const pool = mysql2.createPool({
    database:'companydb',
    user:'root',
    password:'elvisgt99'
})