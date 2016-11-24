module.exports = {
  name: 'ac:copy',
  help: 'Copies files',
  task: (gulp, cfg) => () => gulp
    .src(cfg.src)
    .pipe(gulp.dest(cfg.dest)),
  watch: (gulp, cfg, name) => () => gulp.watch(cfg.src, [name]),
  config: {
    src: 'src/',
    dest: 'build/'
  }
}
