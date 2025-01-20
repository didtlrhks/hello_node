const http = require("http");

const server = http.createServer((req,res) => {
    res.setHeader("Content-type", "text/plain");
    res.write("Hello node");
    res.end();
});


server.listen(3000, () => {
    console.log("서버가 실행 중");
});