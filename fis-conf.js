fis.set('project.ignore',['output/**', '.git/**', 'fis-conf.js']);

// fis.match('node_modules/babel-runtime/{*,**/*}.js', {
//   packTo: 'babel-runtime/',
//   isMod: true
// })
fis.match('node_modules/(**.js)', {
  isMod: true,
  release: '/$1'
});


// 启用 es6-babel 插件，解析 .es6 后缀为 .js
// fis.match('*.es6', {
//     rExt: '.js',
//     parser: fis.plugin('es6-babel')
//   });
fis.match('*.es6', {
  parser: fis.plugin('babel-6.x', {
    // presets: ['env', 'stage-3'],
    plugins:['transform-runtime']
  }),
  rExt: '.js'
});
  
  
  
// 开启模块化开发
fis.hook('commonjs');
fis.match('*.es6', {
  isMod: true
});

fis.match('::package', {
  postpackager: fis.plugin('loader')
});