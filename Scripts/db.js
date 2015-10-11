var mysql = require('mysql');

var db = {};

var connection = mysql.createConnection({
    host: 'mydbinstance.cl5k3tw2xzvq.us-west-2.rds.amazonaws.com:3306',
    user: 'TeamFlex',
    password: 'flexingaak',
    port: '3306'
});

db.connection = connection.conect(function(err){
  if(err){
    console.error('error connecting: ' + err.stack);
    return;
  }
}

exports = module.exports = db;
