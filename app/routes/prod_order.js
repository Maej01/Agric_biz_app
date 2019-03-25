var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
// var order_data = require('../data/product_order.json');
var mongoose = require('mongoose');


// router.get('/orders', function(req, res){
//     res.json(order_data);
// });


//enabling the body parser
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended:false }));

//post request route
router.post('/orders', function(req, res){
    order_data = req.body; //unshift method -> can display recent data first
    fs.writeFile('app/data/product_order.json', JSON.stringify(order_data), 'utf8',
    function(err) {
        console.log(err);
    });
    console.log('data written successfully');
    // res.json(feedbackData);
});

module.exports = router;