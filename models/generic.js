var db= require('../connection');
var request = new db.Request();

var paramsHourly = {
    getParameters : function(table){
        return  request.query('select * from '+table)
    },
    addParameters : function(paramObj){
        const machineId = paramObj.machine_id;
        const date =  paramObj.timestamp;
        const flow = paramObj.flow;
        const energy = paramObj.energy;
        const pressure = paramObj.pressure;
        const humidity = paramObj.humidity;
        const temp = paramObj.temprature;
       
        return request.query("insert into parameter_data ([machine_id],[timestamp],[flow],[energy],[pressure],[humidity],[temprature]) values('"+machineId+"','" + date + "','"+flow+"','"+energy+"','"+pressure+"','"+humidity+"','"+temp+"')")
    },
    fetchParameters : function(table,parameter,startDate,endDate){

    }
}

module.exports = paramsHourly;