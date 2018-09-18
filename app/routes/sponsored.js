var express = require('require');
var router = express.Router();

//unsponsored farmers pos request
router.get('/sponsored', function(req, res){
    //getting the data
    var spData = req.app.get('appData_3');
    var sponsored_Farmers = spData.sponsored_farmers;

    res.render('farmers',{
        pageTitle: "farmers",
        spfarmer: sponsored_Farmers,
        pageID: "spFarmersDetail"
    });
}); 

module.exports = router;