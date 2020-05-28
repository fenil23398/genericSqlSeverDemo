var express = require('express');
var router = express.Router();

//For Generic Queries
var generic = require("../models/generic");

let table = '';
router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        const type = req.params.id.toLowerCase();
        console.log("TYpe defined For Generic ", type)
        let startDate = '';
        let parameter = '';
        if(req.body.startDate)
            startDate = req.body.startDate;
        if(req.body.parameter)
            parameter = req.body.parameter;

        //Check if Start Date is Missing
        if(startDate = '')
            res.status(400).send("Date Missing");
        //Check For Parameter
        if(parameter = '')
            res.status(400).send("Parameter is Missing");

        if (type === 'weekly') {
            table = 'daily_data';            
        }
        else if (type === 'monthly') {
            table = 'monthly_data';
        }
        else if (type === 'hourly') {
            table = 'hourly_data';
        }
        //If any of type not passed
        else {
            res.status(400).send("Invalid Paramater Type");
        }
    }
})

module.exports = router;