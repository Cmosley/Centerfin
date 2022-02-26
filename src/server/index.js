const mysql = require('mysql');

const password = formatEnvVariable(process.env.REACT_APP_DB_PASS);

function formatEnvVariable(env) {
  env = "'" + env + "'";
  return env;
} 

const db = mysql.createConnection({
  host: 'centerfin-test-1.cvvbqxqsgibo.us-east-1.rds.amazonaws.com',
  port: '3306',
  user: 'admin',
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