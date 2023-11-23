const http = require("http");
const { routes } = require("./services/routes");

const port = 9001;

const server = http.createServer((request, response) => {
  routes(request, response);
});

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
