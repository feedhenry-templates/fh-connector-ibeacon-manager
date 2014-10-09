var mbaasApi = require('fh-mbaas-api');
var express = require('express');
var mbaasExpress = mbaasApi.mbaasExpress();
var cors = require('cors');

var beacons = require('./lib/beacons.js');

// list the endpoints which you want to make securable here
var securableEndpoints;
// fhlint-begin: securable-endpoints
securableEndpoints = ['beacons'];
// fhlint-end

var app = express();

// Enable CORS for all requests
app.use(cors());

// Note: the order which we add middleware to Express here is important!
app.use('/sys', mbaasExpress.sys(securableEndpoints));
app.use('/mbaas', mbaasExpress.mbaas);

// Note: important that this is added just before your own Routes
app.use(mbaasExpress.fhmiddleware());

// allow serving of static files from the public directory
app.use(express.static(__dirname + '/public'));

// fhlint-begin: custom-routes
app.use('/beacons', require('./lib/beaconRoutes.js')());
app.use('/cloud/beacons', require('./lib/beaconRoutes.js')());
// fhlint-end

// Important that this is last!
app.use(mbaasExpress.errorHandler());

var port = process.env.FH_PORT || process.env.VCAP_APP_PORT || 8001;
app.listen(port, function(){
  console.log("App started at: " + new Date() + " on port: " + port);
});

beacons.prime(function(err, res){
  console.log(arguments);
});
