const gulp = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const errorHandler = require('gulp-plumber-error-handler');
const prettify = require('gulp-jsbeautifier');
const filter = require('gulp-filter');
const rename = require('gulp-rename');
const pugInheritance = require('gulp-pug-inheritance');
const gulpIf = require('gulp-if');
const getData = require('jade-get-data')('app/data');

gulp.task('templates', () => (
  gulp.src('app/**/*.pug')
<<<<<<< HEAD
  //gulp.src('app/pages/budgetary_policy/budgetary_policy.pug')
=======
  // gulp.src('app/pages/services_social_significant/services_social_significant.pug')
>>>>>>> eee2a4f7e0bcae677b47883f61371fab107e5ac1
    .pipe(plumber({ errorHandler: errorHandler('Error in templates task') }))
    .pipe(gulpIf(global.isWatching, pugInheritance({ basedir: 'app' })))
    .pipe(filter(file => /app[\\\/]pages/.test(file.path))) // eslint-disable-line no-useless-escape
    .pipe(pug({ data: { getData } }))
    .pipe(prettify({
      braceStyle: 'expand',
      indentWithTabs: true,
      indentInnerHtml: true,
      preserveNewlines: true,
      endWithNewline: true,
      wrapLineLength: 120,
      maxPreserveNewlines: 50,
      wrapAttributesIndentSize: 1,
      unformatted: ['use'],
    }))
    .pipe(rename({ dirname: '.' }))
    .pipe(gulp.dest('dist'))
));
