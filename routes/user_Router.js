var express = require('express');
var router = express.Router();
var generic = require("../models/generic");

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

module.exports = router;