// fis.set('project.ignore',['output/**', '.git/**', 'fis-conf.js']);

// fis.match('node_modules/babel-runtime/{*,**/*}.js', {
//   packTo: 'babel-runtime/',
//   isMod: true
// })
// fis.match('node_modules/(**.js)', {
//   isMod: true,
//   release: '/$1'
// });


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

fis.match('*.scss', {
  parser: fis.plugin('node-sass', {
    // options...
  }),
  rExt: '.css'
})
fis.match('*.{js,es,es6,jsx,ts,tsx}', {
  preprocessor: fis.plugin('js-require-css')
})

  
// 开启模块化开发
// fis.match('/{node_modules}/**.js', {//这个配置不对，不应该用{}，导致我找了好久的原因
//   isMod: true,
//   useSameNameRequire: true
// });
fis.match('/node_modules/**.js', {
  isMod: true,
  useSameNameRequire: true
});
fis.match('*.es6', {
  isMod: true
});

fis.hook('commonjs', {
  extList: ['.js', '.jsx', '.es6', '.es', '.ts', '.tsx']
});
fis.match('::package', {
  postpackager: fis.plugin('loader')
});
fis.unhook('components');
fis.hook('node_modules');