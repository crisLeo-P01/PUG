const {src, dest, watch} = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const rename = require('gulp-rename');

// function html() {
//   return src('src/*.pug')
//   .pipe(pug({pretty: true}))
//   .pipe(dest('dist'));
// }

// exports.html = html;

function php() {
  return src('src/*.pug')
  .pipe(pug({pretty: true}))
  .pipe(rename({extname: '.php'}))
  .pipe(dest('dist/php'));
}

exports.php = php;

function css() {
  return src('src/scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('dist/css/'));
}

exports.css = css;

function js() {
  return src('src/js/*.js')
  .pipe(concat('scripts.js'))
  .pipe(dest('dist/js/'));
};

exports.js = js;

exports.default = function() {
  watch('src/scss/*.scss', css);
  watch('src/*.pug', php);
  // watch('src/*.pug', html);
  watch('src/js/*.js', js);
}
