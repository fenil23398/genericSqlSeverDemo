var moment = require('moment');
let methods = {
     addDateHourly : (startDate) => {
        return startDate;
    },
    
    //First Argument Starting Date
    //Second Argument number of Days (If want to go back dn Negative Argument)  
    getDaysBack : (startDate,days) => {
        return moment(startDate).add(days,'day').format("YYYY-MM-DDTHH:mm:ss SSS");
    }
} 
module.exports = methods;