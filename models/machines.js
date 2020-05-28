var db= require('../connection');
var request = new db.Request();


var machines = {
    addMachines : function(machineObj){
        const machineId = machineObj.machine_id;
        const machineName = machineObj.machine_name;
        return request.query("insert into machines ([machine_id],[machine_name]) values('"+machineId+"','" + machineName + "')")
    },
}

module.exports = machines;