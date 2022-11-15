## Instalar de forma global
- nodejs
- npm install --global gulp-cli
- npm install -g sass
- npm install -g windows-build-tools (Para las imágenes)

## Para iniciar el proyecto con el package.json
- npm init -y

## Instalar de forma local( proyecto )
- npm install gulp-pug (PUG)
- npm install gulp-rename (PHP)
- npm install gulp-concat (JAVASCRIPT)
- npm install sass gulp-sass --save-dev (SASS)
- npm install --save-dev gulp-image (IMAGES)

### Creamos el archivo gulpfile.js donde estara todas las dependencias

```
const {src, dest, watch} = require('gulp');
const pug = require('gulp-pug');``
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const rename = require('gulp-rename');
```

#### HTML
function html() {
  return src('src/*.pug')
  .pipe(pug({pretty: true}))
  .pipe(dest('dist'));
}

exports.html = html;

#### PHP
function php() {
  return src('src/*.pug')
  .pipe(pug({pretty: true}))
  .pipe(rename({extname: '.php'}))
  .pipe(dest('dist/php'));
}

exports.php = php;

#### SASS
function css() {
  return src('src/scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(dest('dist/css/'));
}

exports.css = css;

#### JAVASCRIPT
function js() {
  return src('src/js/*.js')
  .pipe(concat('scripts.js'))
  .pipe(dest('dist/js/'));
};

exports.js = js;

#### COMPILADOR POR DEFAULT
exports.default = function() {
  watch('src/scss/*.scss', css);
  watch('src/*.pug', php);
  // watch('src/*.pug', html);
  watch('src/js/*.js', js);
}
