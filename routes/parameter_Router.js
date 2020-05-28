var express = require('express');
var router = express.Router();
var generic = require("../models/generic");

router.get('/:id?', function (req, res, next) {
    var tableName = 'parameter_data';
    generic.getParameters(tableName).then(rows => {
        console.log("Result Fetched ",rows);
        res.status(200).json(rows.recordset);
    })
    .catch(err => {
        console.log('Error in Fetching Data ',err);
        res.status(200).json(err);
    })
})

router.post('/',function(req,res,next){
    generic.addParameters(req.body)
    .then(rows => {
        console.log("Parameters Added Successfully ",rows);
        res.status(200).json(rows);
    })
    .catch(err => {
        console.log("Error in Adding Parameters ",err);
        res.status(400).json(err);
    })
})

module.exports = router;