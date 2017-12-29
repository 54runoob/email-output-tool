var rs = require("fs");
 rs.readFile("./test.json","utf-8",function(err, data) {
     if (err) {
         console.log("err")
     } else {
         console.log(data);
     }
 });
 console.log("异步读取文件内容");