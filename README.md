#  webpack 深入学习

## 安装

Webpack可以使用npm安装，新建一个空的练习文件夹（此处命名为webpack），在终端中转到该文件夹后执行下述指令就可以完成安装。

```
//全局安装

npm install -g webpack

//安装到你的项目目录

npm install --save-dev webpack

```

## 正式使用Webpack前的准备

在上述练习文件夹中创建一个package.json文件，这是一个标准的npm说明文件，里面蕴含了丰富的信息，包括当前项目的依赖模块，自定义的脚本任务等等。在终端中使用npm init命令可以自动创建这个package.json文件

```
npm init

```