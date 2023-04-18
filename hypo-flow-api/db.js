const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'hypo',
    password: 'WantofANail',
    database: 'hypo_flow_db',
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
