// Core modules
// fs
// http 
// os
// https

const http = require('http');

const server =  http.createServer((req,res)=>{
    console.log(req.headers,req.method);
});

server.listen(3000,()=>{
    console.log('Server is running')
})