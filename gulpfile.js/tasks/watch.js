const gulp = require('gulp');
const runSequence = require('run-sequence');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').get;
const bs = browserSync('server');

gulp.task('watch', () => {
  global.isWatching = true;
  watch('app/static/icons/**/*', () => runSequence('icons', bs.reload));
  watch('app/static/images/**/*', () => runSequence('images', bs.reload));
  watch('app/static/misc/**/*', () => runSequence('copy', bs.reload));
  watch(['app/{pages,blocks,components,layouts}/**/*.pug'], () => runSequence('templates', bs.reload));
  watch(['app/{styles,blocks,components,pages}/**/*.scss'], () => runSequence('styles', bs.reload));
  watch(['app/data/**/*.json'], () => runSequence('templates', bs.reload));
  gulp.start('scripts:watch');
});
