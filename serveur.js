var http = require('http') ;
http.createServer((req,res)=> {
    res.writeHead(200,{'Content-Type' : 'text/plain'})
    res.end('<h1>Hello Node!!!! </h1>\n')
}).listen(3000)