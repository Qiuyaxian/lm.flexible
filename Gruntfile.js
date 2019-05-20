//包装函数
var grunt = require('grunt');
module.exports = function(grunt) {  
  //配置参数  
  require("load-grunt-tasks")(grunt);  
  grunt.initConfig({  
    pkg: grunt.file.readJSON('package.json'),
    uglify: {  
      options: {
        mangle: true, //混淆变量名
        comments: 'false' //false（删除全部注释），some（保留@preserve @license @cc_on等注释）
      },  
      build: {
        files: {
  	      "./flexible.min.js": "./flexible.js"
  	    }
      } 
    }
  });  
  //载入uglify插件，压缩js
  grunt.loadNpmTasks('grunt-contrib-uglify'); 
  //注册任务 
  grunt.registerTask('default',['uglify:build']); 
} 