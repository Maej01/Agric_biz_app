var express = require('express');
var router = express.Router();

router.get('/invest', function(req, res){

    res.render('invest', {
        pageTitle: 'invest page',
        pageID: 'invest'
    });
});

module.exports = router;