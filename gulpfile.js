const gulp = require('gulp'); //instalar o Gulp 4.0.2
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin'); //instalar o imagemin 7.1.0
const uglify = require('gulp-uglify');
const compresed = require('gulp-clean-css');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass()).pipe(compresed())
        .pipe(gulp.dest('./dist/css'))
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
}