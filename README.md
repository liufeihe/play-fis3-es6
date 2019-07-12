# play-fis3-es6
import module and es6 feature for js project with fis3

# 需要安装的模块

cnpm i -g fis3<br>
cnpm i -g fis3-postpackager-loader<br>

支持es6
cnpm i -g fis-parser-babel-6.x<br>
cnpm i -S babel-plugin-transform-runtime<br>

支持模块化
cnpm i -g fis3-hook-commonjs<br>
cnpm i -g fis3-hook-node_modules<br>

支持sass/scss转为css
cnpm i -g fis-parser-node-sass<br>

支持在js中引用css
cnpm i -g fis3-preprocessor-js-require-css


# 使用fis3 server调试：

fis3 release<br>
fis3 server start<br>
fis3 server stop<br>
fis3 server clean<br>


# fis3打包到dist目录下
fis3 release -d ./dist


# 参考
http://fis.baidu.com/fis3/docs/common-plugin.html
