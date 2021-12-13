const Pool = require('pg').Pool;
 const pool = new Pool({
  user: 'Mac',
  host: 'localhost',
  database: 'mydb',
  password: null,
  port: 5432,
});

module.exports = pool;