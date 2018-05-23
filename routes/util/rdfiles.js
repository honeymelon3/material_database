var fs = require('fs')


//遍历文件夹，获取所有文件夹里面的文件信息
/*
* @param path 路径
*
*/
// path='./views';

// filesList = geFileList(path);
var getFileList=function(path,callback)
{
var filesList = [];
readFile(path,filesList);

callback(filesList);
}

//遍历读取文件
function readFile(path,filesList)
{
files = fs.readdirSync(path);//需要用到同步读取
files.forEach(walk);
function walk(file)
{ 
 states = fs.statSync(path+'/'+file);   
 if(states.isDirectory())
 {
  readFile(path+'/'+file,filesList);
 }
 else
 { 
  //创建一个对象保存信息
  var obj = new Object();
  obj.size = states.size;//文件大小，以字节为单位
  obj.name = file;//文件名
  obj.path = path+'/'+file; //文件绝对路径
  obj.time = states.mtime;
  filesList.push(obj);

}  
}
}  
// console.log(filesList);
exports.getFileList = getFileList;