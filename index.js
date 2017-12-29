var fs = require('fs');
var content = [];
var numberArr = "0123456789";
var letterArr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ._";
var tag = "@";
var suffixArr = ["126.com","sina.com","sohu.com","qq.com","163.com",
    "163.net","yahoo.com.cn","263.net","eyou.com","56.com","21cn.com",
    "etang.com","xinhuannet.com","china.com","netease.com","tom.com",
    "yeah.net","eastday.com","email.com.cn","citiz.com","hotmail.com",
    "msn.com","265.com","35.com","enet.com.cn","91.com","xilu.com",
    "139.com","189.cn","gmail.com","aliyun.com","51.com"];
/**
 *
 * @param arr 待选择的数组字符集
 * @param len 拼接后的长度
 * @param total 拼接后的数组集合元素个数
 * @param suffixArr 后缀名数组集合
 * @returns {Array}
 */
function randomOutput(arr, len, total,suffixArr) {
    var temp = [];
    var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
    var qqReg = /^[1-9]\d{4,8}@(\w)+((\.\w{2,3}){1,3})$/;
    for(var j=0;j<total;j++){
        var item = "";
        for(var i=0;i<len;i++){
            item = item + arr[Math.floor((Math.random()*arr.length))] + "";
        }
        item += (tag + suffixArr[Math.floor((Math.random()*suffixArr.length))] + "");
        temp.push(item)
        if (reg.test(item)) {
            temp.push(item)
        }
    }
    return temp;
}

/**
 * QQ邮箱专属
 * @param arr
 * @param len
 * @param total
 * @param suffixArr
 * @returns {Array}
 */
function randomQQOutput(arr, len, total,suffixArr) {
    var temp = [];
    var qqReg = /^[1-9]\d{4,8}@(\w)+((\.\w{2,3}){1,3})$/;
    for(var j=0;j<total;j++){
        var item = "";
        for(var i=0;i<len;i++){
            item = item + arr[Math.floor((Math.random()*arr.length))] + "";
        }
        item += (tag + suffixArr[Math.floor((Math.random()*suffixArr.length))] + "");
        //temp.push(item)
        if (qqReg.test(item)) {
            temp.push(item)
        }
    }
    return temp;
}

function randomOutput2(numberArr, numberCount,letterArr, letterCount, total, suffixArr) {
    var temp = [];
    var arr = numberArr.concat(letterArr);
    var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
    for(var j=0;j<total;j++){
        var item = "";
        for(var i=0;i<(numberCount+letterCount);i++){
            item += (numberArr[Math.floor((Math.random()*numberArr.length))] + "");
        }

        item += (tag + suffixArr[Math.floor((Math.random()*suffixArr.length))] + "");
        if (reg.test(item)) {
            temp.push(item)
        }
    }
    return temp;
}
/**
 * 数组去重
 */
Array.prototype.uniqueTest = function() {
    var temp = [];
    var json = {};
    for (var i=0;i<this.length;i++){
        if(!json[this[i]]){
            temp.push(this[i]);
            json[this[i]] = 1;
        }
    }
    return temp;
}
// content =randomOutput(numberArr.split("").concat(letterArr.split("")), 6, 1000,suffixArr);
// content =randomOutput2(numberArr.split(""), 6, letterArr.split(""), 1,10,suffixArr);
//content = Array.from(test);
sufArr = ["qq.com"];
var num = 1500000;
var content0 = randomQQOutput(numberArr.split(""),5,num,sufArr);
var content1 = randomQQOutput(numberArr.split(""),6,num,sufArr);
var content2 = randomQQOutput(numberArr.split(""),7,num,sufArr);
var content3 = randomQQOutput(numberArr.split(""),8,num,sufArr);
var content4 = randomQQOutput(numberArr.split(""),9,num,sufArr);
var content5 = randomQQOutput(numberArr.split(""),10,num,sufArr);
var content6 = randomQQOutput(numberArr.split(""),11,num,sufArr);
var content7 = randomQQOutput(numberArr.split(""),12,num,sufArr);
content =content0.concat(content1).concat(content2).concat(content3).concat(content4).concat(content5).concat(content6).concat(content7);
content = content.uniqueTest();
console.log(content);
function fileName(str, suffix){
    return str + "." + suffix;
}
console.log("该文件有" + content.length + "个邮箱");
var filename = fileName("5-12位qq号（"+ content.length +"个)","txt");
/**
 * 写入文件
 */
fs.writeFile("./email/" + filename, JSON.stringify(content), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
