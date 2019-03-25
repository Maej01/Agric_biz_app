var express = require('express');
var router = express.Router();
var feedbackData = require('../data/feedback.json');
var bodyParser = require('body-parser'); 
var fs = require('fs');

//get request route
router.get('/api', function(req, res){
    res.json(feedbackData);
});

//enabling the body parser
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended:false }));

//post request route
router.post('/api', function(req, res){
    feedbackData.unshift(req.body); //unshift method -> can display recent data first
    fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8',
    function(err) {
        console.log(err);
    });
    
    res.json(feedbackData);
});

module.exports = router; //exporting the router module