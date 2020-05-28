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

        }

        else if (type === 'monthly') {
            table = 'monthly_data';
        }

        else if (type === 'hourly') {
            table = 'hourly_data';
            console.log("Before ",startDate);
            let endDate = commonMethods.addDateHourly(startDate);
            console.log("StarDate For Hourly ",startDate);
            console.log("EndDate for Hourly ",endDate);
            console.log("Parameter is ",parameter);
        }
        
        else {
            res.status(400).send("Invalid Paramater Type");
        }
    
})

module.exports = router;