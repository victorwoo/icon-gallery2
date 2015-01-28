var express = require('express');
var router = express.Router();
var fs = require('fs'),
	path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
//path.join(__dirname, 'bower_components')
	var svgPath = './public/svg';
	// var svgPath = path.join(__dirname, 'public/svg');
	fs.readdir(svgPath, function(err, files) {
		if (err) {
			console.log(err);
			throw err;
		}

		var svgs = files.filter(function(file) {
			return path.extname(file) === '.svg';
		}).map(function(file) {
			return file.substr(0, file.length - 4);
		});

		res.render('index', {
			title: 'icon-gallery',
			svgs: svgs
		});
	});

	
});

module.exports = router;