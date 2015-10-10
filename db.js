var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'mydbinstance.cl5k3tw2xzvq.us-west-2.rds.amazonaws.com:3306',
    user: 'TeamFlex',
    password: 'flexingaak',
    port: '3306'
});

connection.conect(function(err){
  if(err){
    consolle.error('error connecting: ' + err.stack);
    return;
  }
}

module.exports = {db: mysql};
