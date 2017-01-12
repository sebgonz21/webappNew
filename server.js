(function(){

    var http = require("http");
    var fs = require("fs");

function send404Response(res){
    res.writeHead("404", {"Content-type":"text/plain"});
    res.write("Error 404");
    res.end();
}

function onRequest(req,res){
    console.log(req.url);
    if(req.method =='GET' && req.url == '/'){
        res.writeHead(200,{"Content-type":"text/html"});
        fs.createReadStream("./index.html").pipe(res);
    }else if(req.method =='GET' && req.url == '/styles.css'){
        res.writeHead(200,{"Content-type":"text/css"});
        fs.createReadStream("./styles.css").pipe(res);
    }else{
        send404Response(res);
    }
    
}

    
    http.createServer(onRequest).listen(8080);
    console.log("Server running...");
})();