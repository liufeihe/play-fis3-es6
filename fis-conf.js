// 启用 es6-babel 插件，解析 .es6 后缀为 .js
// fis.match('*.es6', {
//     rExt: '.js',
//     parser: fis.plugin('es6-babel')
//   });
fis.match('*.es6', {
  parser: fis.plugin('babel-6.x'),
  rExt: '.js'
});
  
  
  
// 开启模块化开发
fis.hook('commonjs', {
  baseUrl: './'
});
fis.match('*.es6', {
  isMod: true
});

fis.match('::package', {
  postpackager: fis.plugin('loader')
});