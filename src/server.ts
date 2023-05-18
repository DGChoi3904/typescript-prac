import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {

  //요청 방식이 GET일 경우
  if (req.method === "GET") {
    //URL이 root, 도메인 root일 경우(예: http://127.0.0.1:3070/)
    if (req.url === "/") {
      res.writeHead(200, { "Content-type": "text/html" });
      res.write(fs.readFileSync("./src/test.html", "utf8"));
      res.end();
    }
  }

  //요청 방식이 POST일 경우
  if (req.method === "POST") {

  }

})

server.listen(3070, );