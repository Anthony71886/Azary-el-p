
// gulpfile.js (Gulp 4)
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

// Paths
const paths = {
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js'
  }
};

// Compile & minify SCSS
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest));
}

// Minify & concat JS
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest));
}

// Watch task
function watchFiles() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
}

// Expose tasks
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watchFiles;
exports.default = gulp.series(
  gulp.parallel(styles, scripts)
);
