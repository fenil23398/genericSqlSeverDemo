var express = require('express');
var router = express.Router();


//For Generic Queries
var generic = require("../models/generic");

//Methods 
var commonMethods = require("../genericMethods");

let table = '';
router.post('/', function (req, res, next) {

        let startDate = '';
        let parameter = '';
        let type = req.body.type;
        let endDate = '';

        if(req.body.startDate)
               startDate = req.body.startDate;
        
        if(req.body.parameter)
            parameter = req.body.parameter;

        if(startDate === '')
            res.status(400).send("Date Missing");

        if(parameter === '')
            res.status(400).send("Parameter is Missing");

        if (type === 'weekly') {
            table = 'daily_data';
            endDate = commonMethods.getDaysBack(startDate,-7)
        }

        else if (type === 'monthly') {
            table = 'monthly_data';
           
        }

        else if (type === 'hourly') {
            table = 'hourly_data';
            endDate = commonMethods.addDateHourly(startDate);
        }
        
        else {
            res.status(400).send("Invalid Paramater Type");
        }
        console.log(" Type : ",type);
        console.log(" startDate : ",startDate);
        console.log(" EndDate : ",endDate);
        console.log(" Parameter : ",parameter);
        console.log(" Table Name : ",table);
        generic.fetchParameters(table,parameter,startDate,endDate)
        .then(data => {
            console.log("Data Fetched ",data);
            res.json(data);
        })
        .catch(err => {
            console.log("Error Fetched ",err);
            res.json(err);
        })
        
    
})

module.exports = router;