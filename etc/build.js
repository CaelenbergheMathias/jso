({
	baseUrl: "../src",
	paths: {
		"jquery"	: "../bower_components/jquery/dist/jquery.min"
	},
	shim: {
	},
	wrap: {
		"startFile": "wrap.start",
		"endFile": "wrap.end"
	},
	name: "../bower_components/almond/almond",
	include: "jso",
	exclude: ["jquery"],
	optimize: "uglify",
	out: "../dist/jso.min.js"
})