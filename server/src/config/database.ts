import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    /*------------------------------------------
    *Connect db used MysqlWordbend
    -------------------------------------------*/
    host: 'localhost',
    user: 'root',
    password: 'phuonglam1',
    database: 'guitar_shop',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;