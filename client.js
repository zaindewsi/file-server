const net = require("net");
const stdin = process.stdin;

const client = net.createConnection({
  host: "localhost",
  port: 3001,
});

client.setEncoding("utf8");

client.on("connect", () => {
  client.write("Client: Zain in the house");
});

client.on("data", (data) => {
  console.log(data);
});
