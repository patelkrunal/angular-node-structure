/**
 * Created by krunal on 11/3/15.
 */

//require everything that you need.
var router = require('express').Router();
var _          = require('underscore');


    // middleware to use for all requests
    router.use(function(req, res, next) {
        // do logging
        next();
    });

    // test route to make sure everything is working (accessed at GET http://host:port/api)
    router.get('/', function(req, res) {
        res.json({ message: 'Welcome to Krunal API' });
    });


    // ROUTES FOR OUR API
    // =============================================================================

    // on routes that end in /user
    // ----------------------------------------------------



    router.route('/user')
        .get(function(req, res) {
            res.json({message:"USER API"});
        });

module.exports = router;
