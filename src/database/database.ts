import 'dotenv/config';
import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD ?? '',
    database: process.env.DB_NAME ?? '',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    socketPath: process.env.DB_SOCKET_PATH ?? ''
});

export default pool;
