const Connection = require('./app/database/connection');

async function testConnection() {
  const pool = Connection.connection();
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Hora do servidor:', res.rows[0]);
  } catch (err) {
    console.error('Erro na consulta:', err);
  }
}

testConnection();