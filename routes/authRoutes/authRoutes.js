
module.exports = function(passport) {
	const path = require("path");
	const router = require('express').Router();
	
	router.get("/isAuthenticated",function(req,res){
		if (req.isAuthenticated()){
			res.json({
				userId: req.user._id,
				isAuthenticated: true
			});
		} else {
			res.json({
				userId: null,
				isAuthenticated: false
			});
		}
	});

	router.post('/signup', passport.authenticate('local-signup', {
			successRedirect: '/auth/success',
			failureRedirect: '/auth/failure'
		}),
		function (req, res) {

		}
	);

	router.post('/signin', passport.authenticate('local-signin', {
			successRedirect: '/auth/success',
			failureRedirect: '/auth/failure'
		}),
		function (req, res) {

		}
	);

	router.get("/success", function (req, res) {
		// console.log(req.user);
		res.json({
			userId: req.user._id,
			isAuthenticated: true
		});
	});

	router.get("/failure", function (req, res) {
		res.json({
			userId: null,
			isAuthenticated: false
		});
	});

	router.get("/signout", function (req, res) {
		req.session.destroy(function (err) {
			res.redirect('/');
		});
	});

	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated())
			return next();

		res.redirect('/');
	}


	return router;
};