//obtener el cliente
const Pool= require('pg').Pool;

// psql -h b1sapeoibiyybs2athzo-postgresql.services.clever-cloud.com -p 5432 -U uylxrzzv38j9bc2uvpgk -d b1sapeoibiyybs2athzo
const pool = new Pool({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME
});

const connection_postgres = module.exports={pool: pool}