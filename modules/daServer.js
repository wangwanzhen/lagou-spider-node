/**
 * Created by Administrator on 2016/8/23.
 */


var da = require('./data-analysis');
var http = require('http');
var url = require('url');




function start() {
    function onRequest(req, res) {
        var urlObj = url.parse(req.url, true);
        if (urlObj.pathname != "/analysis") return false;

        da.getCityEmploymentNum(function (data) {
            console.log(data);
        });
        
        
        // 设置字符编码(去掉中文会乱码)
            res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
        // res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});  // text/html
        res.end("成功");

    }


    http.createServer(onRequest).listen(3000);
}


exports.start = start;