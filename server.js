const net = require("net");
const stdin = process.stdin;

const server = net.createServer();

server.on("connection", (conn) => {
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });
  conn.write("Server: Welcome to my server");
});

server.listen(3001, () => {
  console.log("Server listening on port 3001...");
});
