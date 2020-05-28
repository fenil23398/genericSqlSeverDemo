var express = require('express');
var router = express.Router();

//For Generic Queries
var generic = require("../models/generic");

//For Machines Related only
var machines = require("../models/machines")

let tableName = 'machines';

router.get('/:id?', function (req, res, next) {
   generic.getParameters(tableName).then(rows => {
        console.log("Result Fetched ",rows);
        res.status(200).json(rows.recordset);
    })
    .catch(err => {
        console.log('Error in Fetching Data ',err);
        res.status(400).json(err);
    })
})

router.post('/',function(req,res){
    machines.addMachines(req.body)
    .then(rows => {
        console.log("Machine added Successfully");
        res.status(200).json(rows);
    })
    .catch(err => {
        console.log("Error in Adding Machines ",err);
        res.status(400).json(err);
    })
})

module.exports = router;