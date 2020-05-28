var express = require('express');
var router = express.Router();

//Generic Queries
var generic = require("../models/generic");

//For users
var users = require("../models/users");


router.get('/:id?', function (req, res, next) {
    var tableName = 'userSchema';
    generic.getParameters(tableName).then(rows => {
        console.log("Result Fetched ",rows);
        res.json(rows.recordset);
    })
    .catch(err => {
        console.log('Error in Fetching Data ',err);
        res.json(err);
    })
})

router.post('/',function(req,res){
    users.adduser(req.body)
    .then(rows => {
        console.log("User Added Successfully ",rows);
        res.status(200).json(rows);
    })
    .catch(err => {
        console.log("Error In Adding User ",err);
        res.status(400).json(err);
    })
})

module.exports = router;