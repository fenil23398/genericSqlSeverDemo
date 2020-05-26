var express = require('express');
var router = express.Router();
var generic = require("../models/generic");

router.get('/:id?', function (req, res, next) {
    var tableName = 'parameter_data';
    generic.getParameters(tableName).then(rows => {
        console.log("Result Fetched ",rows);
        res.json(rows.recordset);
    })
    .catch(err => {
        console.log('Error in Fetching Data ',err);
        res.json(err);
    })
})

router.post('/',function(req,res,next){
    generic.addParameters(req.body)
    .then(rows => {
        console.log("Parameters Added Successfully ",rows);
        res.json(rows);
    })
    .catch(err => {
        console.log("Error in Adding Parameters ",err);
        res.json(err);
    })
})

module.exports = router;