"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
http.createServer(function (request, response) {
    // 요청 본문 데이터를 스트림으로 처리하기 위해 pipe()를 사용합니다.
    request.pipe(process.stdout);
    // 응답을 보냅니다.
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello, World!');
}).listen(3000);
console.log('Server running at http://localhost:3000');
