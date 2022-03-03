const mysql = require('mysql');

const password = formatEnvVariable(process.env.REACT_APP_DB_PASS);
const host = formatEnvVariable(process.env.REACT_APP_DB_HOST);
const db_user = formatEnvVariable(process.env.REACT_APP_DB_USER);
const db_port = formatEnvVariable(process.env.REACT_APP_DB_PORT);


function formatEnvVariable(env) {
  env = "'" + env + "'";
  return env;
} 

const db = mysql.createConnection({
  host: host,
  port: db_port,
  user: db_user,
  password: password,
  //database: 'centerfin-test-1',
})

db.connect(err=>{
  if(err){
    console.log(err.message);
    return;
  }
  console.log('Database connected')
})