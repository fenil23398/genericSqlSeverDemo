var db = require('mssql');

//Most chances of error in connection
//Check port it make be dynamic from sql server configuration manager
//Change it to tcp ip and make it fix port to run and specify in connecion file
//If not specified in config file Than It will be on port 1433

var config = {
    user : 'sa',
    password : 'Password',
    server : 'localhost',
    database : 'learning',
    options: {
        "encrypt": true,
        "enableArithAbort": true
    },
    port : 49170
}

var connection =  db.connect(config,function(err){
    if(err)
        console.log("Error In Connection To Database",err)
    else {   
        console.log("Successfully Connected");
    }
})

module.exports = db;