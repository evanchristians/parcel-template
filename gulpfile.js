"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var concat = require("gulp-concat");
var cleanCss = require("gulp-clean-css");
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");
sass.compiler = require("sass");

gulp.task("sass", function () {
    return gulp
        .src("./app/scss/main.scss")
        .pipe(concat("style.css"))
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./assets/"));
});

gulp.task("sass:easings", function () {
    return gulp
        .src("./assets/style.css")
        .pipe(postcss([require("postcss-easings")]))
        .pipe(gulp.dest("./assets/"));
});

gulp.task("sass:watch", function () {
    gulp.watch("./app/scss/**/*.scss", gulp.series(["sass", "sass:easings"]));
});

gulp.task("sass:tailwind", function () {
    return gulp
        .src("./app/scss/tailwind.scss", require("autoprefixer"))
        .pipe(concat("tailwind.css"))
        .pipe(postcss([tailwindcss("tailwind.config.js")]))
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./assets/vendor/"));
});

gulp.task("sass:minify-tailwind", function () {
    return gulp
        .src("./assets/vendor/tailwind.css")
        .pipe(cleanCss())
        .pipe(gulp.dest("./assets/vendor/"));
});

gulp.task("sass:minify", function () {
    return gulp
        .src("./assets/style.css")
        .pipe(cleanCss())
        .pipe(gulp.dest("./assets/"));
});

gulp.task(
    "sass:build",
    gulp.series([
        "sass",
        "sass:easings",
        "sass:minify",
        "sass:tailwind",
        "sass:minify-tailwind",
    ])
);
