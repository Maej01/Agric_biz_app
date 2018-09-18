//importing the modules
var express = require('express'); 
var router = express.Router(); 
var bodyParser = require('body-parser');
var MakeOrder = require('../models/make_order.js');
var fs = require('fs');


//body parse middle ware
router.use(bodyParser.urlencoded({ extended:false }));

//body parse middle ware
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//products route
router.get('/', function(req, res){

    //variables
    var ProductData = req.app.get('appData_2'); // getting access to the appData variable from the app.js
    var fruitProductData = ProductData.fruits_pd;
    var vegetableProductData = ProductData.vegetables_pd;
    var cerealProductData = ProductData.cereal_pd;

    res.render('index', {
        pageTitle: "Products",
        fruitProduct: fruitProductData,
        vegetableProduct: vegetableProductData,
        cerealProduct: cerealProductData,
        pageID: "products"
    });
});

//product post request
router.post('/', urlencodedParser, function(req, res){

    //get data from the form and save it in the database
    var FormData = MakeOrder(req.body).save(function(err, data){
        if(err) throw err; //throw and error if found

        // console.log(req.body);
    //    res.render('contact-success', {data: req.body});
       console.log('data saved');
    });

    //var orderData = req.body;
    // var orderDataFile = JSON.stringify(orders, null, 2);
    // fs.writeFile('app/data/product_order.json', JSON.stringify(orderData, null, 2), 'utf8', finished);

    // function finished(err){
    //     console.log(' yeah data saved  ');
    // }

    // var makeOrder = new MakeOrder(req.body);
    // makeOrder.save(); //saving the data in database

    // //creating and saving the data in the database
    // MakeOrder.create(req.body).then(function(order){
    //     res.send(order);
    //     console.log('the data was saved sucessfully');
    // });

    // MakeOrder(req.body).save(function(err, data){
    //     if(err) throw err;
    //     console.log('the data was saved sucessfully');
    // });
});


//exporting the module 
module.exports = router;