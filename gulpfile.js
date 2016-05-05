var gulp= require("gulp"),
  jasmine = require("gulp-jasmine"),
  istanbul = require("gulp-istanbul"),
  eslint = require("gulp-eslint"),
  minify = require("gulp-minify"),
  size = require("gulp-size");

var sources = [
  "./src/*.js"
];

var specs = [
  "./spec/*.js"
];
var helpers = [
  "./spec/helpers/*.js"
];

var testSource = helpers.concat(specs);

gulp.task("test", ["lint"], function(){
  return gulp.src(testSource)
    .pipe(jasmine());
});

gulp.task("minify", function(){
  return gulp.src(sources)
    .pipe(minify())
    .pipe(size({
      showFiles: true,
      showTotal: false
    }))
    .pipe(gulp.dest("./dist/"));
});


gulp.task("pre-test", function () {
  return gulp.src(sources)
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

gulp.task("coverage", ["pre-test"], function () {
  return gulp.src(testSource)
    .pipe(jasmine())
    .pipe(istanbul.writeReports());
});

gulp.task("lint", function () {
  return gulp.src(sources.concat(testSource))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("watch-test", function(){
  gulp.watch(sources.concat(specs),["test"]);
});
