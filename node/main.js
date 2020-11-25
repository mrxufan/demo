// var fun=require('./test.js');
var fs = require("fs");//文件系统
var enents=require('events');//事件触发器
var path=require('path');//路径
var os=require('os');//操作系统模块
var http=require('http');//http模块
var express = require('express');//express框架

// var eventEmitter=new events.EventEmitter();//创建eventEmitter对象
// eventEmitter.on('eventName',enentHandler);//// 绑定事件及事件的处理程序
// eventEmitter.emit('eventName');

/////////////////////// 非阻塞读取文件
// fs.readFile('./test.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });
// console.log("程序执行结束!");


// 删除文件
// fs.unlink('./test.txt', function(err){
// 	if (err) {
// 		throw err;
// 	}
// 	console.log('已删除文件');
// });	



// 创建文件夹
// fs.mkdir('./css', err=>{
// 	if (!err) {
// 		console.log('创建成功');
// 	}
// });


//读取文件夹的文件名
// var imgData=fs.readdirSync('./images');
// console.log(imgData);


// 批量对文件重命名
// fs.readdir('./images', function(err,files){
// 	files.forEach(function(filename,index){
// 		var oldPath='./images/'+filename;
// 		var newPath='./images/'+(index+1)+'.jpg';

// 		fs.rename(oldPath, newPath, function(err){
// 			if (!err) {
// 				console.log('文件批量重命名成功');
// 			}
// 		});
// 	});
// });


// 写入文件，成功后读取文件
// fs.writeFile('./test.txt', '你好啊', function(err){
// 	fs.readFile('./test.txt', function(err,data){
// 		console.log(data.toString());
// 	});
// });



// fs.readFile('./test.txt','utf8',(err,data)=>{
// 	console.log(data.toString());
// });

// fs.writeFile('./test.txt', 'I am node write', err=>{
// 	if (!err) {
// 		console.log('写入成功');
// 	}
// });


// 追加内容
// fs.appendFile('./test.txt', '我是追加的内容', err=>{
// 	if (!err) {
// 		console.log('追加成功');
// 	}
// });




// 创建文件夹，并在创建的文件夹里批量创建文件
// fs.mkdir('./test', (err)=>{
// 	if (err) {
// 		console.log(err);
// 	}else{
		
// 		for (var i = 1; i <= 1000; i++) {
// 			fs.writeFile('./test/test'+i+'.txt','hello node'+i,function(err1){
// 				if (err1) {
// 					console.log(err1);
// 				}
// 			});
// 		}
// 		console.log('创建成功');

// 	}
// });


// 创建服务
// http.createServer(function(req,res){
// 	// 设置响应状态码，响应头
// 	res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
// 	// 设置响应内容
// 	res.write('node demo');
// 	res.end();
// }).listen(10080);


// 新建一个 express 实例
// var app=express();
// // 使用 /static 路径作为我们的静态文件路由，static 作为我们的静态文件目录
// app.use('/static',express.static('static'));
// // 响应一个 Hello Express 字符串
// app.get('/',(req,res)=>{
// 	res.end('<h1>express demo</h1>');
// });




// // 新增路由，用于访问不同状态的小花
// app.get('/head', (req, res) => {
//   // res.SendFile 响应一个本地文件
//   // path.join 用于拼接一个路径
//   // __dirname 是当前文件夹路径，属于 Node 的一个全局变量
//   res.sendFile(path.join(__dirname, './static/head.html'));
// });



// // 进程运行在 8888 端口上，监听该端口的请求；
// app.listen(8888,()=>{
// 	console.log('server is listening in localhost:8888 或 192.168.1.159:8888');
// });










