# play-fis3-es6
import module and es6 feature for js project with fis3

# 需要安装的模块
cnpm i -g fis3
cnpm i -g fis3-postpackager-loader

支持es6
cnpm i -g fis-parser-babel-6.x
cnpm i -S babel-plugin-transform-runtime

支持模块化
cnpm i -g fis3-hook-commonjs
cnpm i -g fis3-hook-node_modules

支持sass/scss转为css
cnpm i -g fis-parser-node-sass

支持在js中引用css
cnpm i -g fis3-preprocessor-js-require-css

# fis3在线发布：
fis3 release
fis3 server start
fis3 server stop
fis3 server clean

# 打包到dist目录下
fis3 release -d ./dist


# 参考
http://fis.baidu.com/fis3/docs/common-plugin.html
