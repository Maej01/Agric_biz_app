var express = require('express');
var router = express.Router();

//farmer route
router.get('/farmers', function(req, res){
    //declaring variables
    var farmerDataFile = req.app.get('appData'); // getting access to the appData variable from the app.js
    var pageFarmers = farmerDataFile.farmers;

    //rendering the farmers view
    res.render('farmers', {
        pageTitle: "farmers",
        farmer: pageFarmers,
        pageID: "farmers"
    });
});

//specific farmer route
router.get('/farmers/:farmerid', function(req, res){
    var farmerDataFile = req.app.get('appData'); // getting access to the appData variable
    
    //these are array variables
    var farmPhotos = [];
    var pageFarmers = [];

    //looping throught the farmer data json file
    farmerDataFile.farmers.forEach(function(item){
        //checking if the request matches the farmer name
        if (item.shortname == req.params.farmerid) {
            pageFarmers.push(item);
            farmPhotos = farmPhotos.concat(item.farm_photos);
        } 
    });
    
    //rendering the farmers view
    res.render('farmers', {
        pageTitle: 'Farmer Info',
        farmPhoto: farmPhotos,
        farmer: pageFarmers,
        pageID: 'farmerDetail'
    });
});

//unsponsored farmers pos request
// router.get('/farmers', function(req, res){
//     //getting the data
//     var spData = req.app.get('appData');
//     var sponsored_Farmers = spData.sponsored_farmers;

//     res.render('farmers',{
//         pageTitle: "farmers",
//         spfarmers: sponsored_Farmers,
//         pageID: "spFarmersDetail"
//     });


// }); 

//exporting the farmers module
module.exports = router;