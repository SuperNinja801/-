var url =require('url')
var data='https://www.bilibili.com/video/BV19t411Q768?p=12&spm_id_from=pageDriver'
console.log(data)
console.log(url.parse(data))
console.log(url.parse(data,true))
var urlQ=url.parse(data,true);
console.log(urlQ.query)
console.log(urlQ.query.p)
console.log(urlQ.query.spm_id_from)
debugger;
