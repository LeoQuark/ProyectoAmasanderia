const { Pool } = require('pg');

// configuraciones para conectar con postgress
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'leonardo123',
    database: 'amasanderia',
    port: ' 5432'
})

module.exports = pool;