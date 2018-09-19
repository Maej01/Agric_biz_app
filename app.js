var express = require('express');
var app = express();
var mongoose = require('mongoose');
var farmerDataFile = require('./app/data/farmers_data.json');
var availableProductData = require('./app/data/available_products.json');
var sponsoredData = require('./app/data/sponsored_farmers.json');
var unsponsoredData = require('./app/data/unsponsored_farmers.json');


//setting an environment variable
app.set('port', process.env.PORT || 3000);
app.set('appData', farmerDataFile);
app.set('appData_2', availableProductData);
app.set('appData_3', sponsoredData);
app.set('appData_4', unsponsoredData);

//connect to mongodb
// mongoose.connect('mongodb://127.0.0.1:27017/agric_biz_db');
// mongoose.Promise = global.Promise; 

//setting up a view engine
app.set('view engine', 'ejs');
app.set('views', './app/views'); //specifying the view folder location

app.locals.siteTitle = 'Agric-Biz';

//accessing the static files
app.use(express.static('./app/public'));

//creating access to the routes
app.use(require('./app/routes/index'));
app.use(require('./app/routes/farmers')); 
app.use(require('./app/routes/feedback'));
app.use(require('./app/routes/about'));
app.use(require('./app/routes/invest'));
app.use(require('./app/routes/api'));
app.use(require('./app/routes/prod_order'));

//listening to the 3000 port
var server = app.listen(app.get('port'), function(){
    console.log('listening on port ' + app.get ('port'));
}); 
 

// reload(server, app);


// var MongoClient = require('mongodb').MongoClient, format = require('util').format;

// MongoClient.connect('mongodb://127.0.0.1:27017', function(err, db){

//     if(err) {
//         throw err;
//     }else{
//         console.log("connected to the mongo server");
//     }

//     db.close();
// });