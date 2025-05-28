const gulp = require('gulp');

// Copy vendor CSS files
gulp.task('vendor-css', function () {
  return gulp.src([
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css',
    'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
    'node_modules/aos/dist/aos.css',
    'node_modules/cookieconsent/build/cookieconsent.min.css',
    'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
    'node_modules/owl.carousel/dist/assets/owl.theme.default.min.css',
    'node_modules/simplebar/dist/simplebar.min.css',
    // add more CSS files here as needed
  ])
    .pipe(gulp.dest('css/vendor')); // relative to assets directory
});

// Copy vendor SCSS files
gulp.task('vendor-scss', function () {
  return gulp.src('node_modules/bootstrap/scss/**/*')
    .pipe(gulp.dest('scss/vendor')); // relative to assets directory
});

// Copy Font Awesome fonts
gulp.task('vendor-fontawesome', function () {
  return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/**/*', { encoding: false })
    .pipe(gulp.dest('css/webfonts'));
});

// Copy vendor JS files
gulp.task('vendor-js', function () {
  return gulp.src([
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
    'node_modules/aos/dist/aos.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    'node_modules/clipboard/dist/clipboard.min.js',
    'node_modules/cookieconsent/build/cookieconsent.min.js',
    'node_modules/counterup2/dist/index.js',
    'node_modules/headroom.js/dist/headroom.min.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/masonry-layout/dist/masonry.pkgd.min.js',
    'node_modules/owl.carousel/dist/owl.carousel.min.js',
    'node_modules/simplebar/dist/simplebar.min.js',
    'node_modules/waypoints/lib/jquery.waypoints.min.js',
    // add more JS files here as needed
  ])
    .pipe(gulp.dest('js/vendor')); // relative to assets directory
});

// Combine tasks
gulp.task('vendor', gulp.parallel('vendor-css', 'vendor-scss', 'vendor-fontawesome', 'vendor-js'));