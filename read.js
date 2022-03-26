var fs=require('fs')
fs.readFile('a.txt',function(err,data){
    if (err){
        console.log(err)
        return;
    }
    console.log(data)//输出buffer对象，可以通过buffer对象转换

    console.log(data.toString())
    
})