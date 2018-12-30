var {dest, watch} = require('gulp');
let b =require("browserify")
let tsf =require("tsify")
var source = require('vinyl-source-stream')


function compil(cb) {
	return b({
		"entries": "src/index.ts"
	}).plugin(tsf)
	.bundle()
	.pipe(source("bundle.js"))
	.pipe(dest('dist'));
	cb()
}


exports.default = () => {
	watch("src/**/*.ts", compil)
}

exports.compil = compil;