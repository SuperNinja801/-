var http = require('http')
http.createServer()
var server =http.createServer()
//监听请求
server.on('request',function(req,res){
    console.log('收到客户请求,请求地址：'+req.url)
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.write('hello')
    res.write('哈哈，<a href="www.baidu.com">点击</a>')
    res.end();
})
//启动服务
server.listen(8080,function(){
    console.log('服务启动成功，访问http://localhost:8080')
})
//http访问