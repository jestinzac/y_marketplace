const constants = require("../generic/constants");
const { getLastUriSegment } = require("../generic/utils");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Content-Type": "application/json",
};

const getApiHandler = (request, response) => {
  const data = fetchRespectiveData(request);

  response.writeHead(200, headers);
  response.write(
    JSON.stringify({
      message: "GET Successful",
      status: 200,
      data,
    })
  );
  //response.end();
  setTimeout(() => response.end(), 2000);
};

const defaultApiHandler = (request, response) => {
  response.writeHead(200, headers);
  response.write(`Cannot ${request.method} ${request.url}`);
  response.end();
};

const fetchRespectiveData = (request) => {
  const { url } = request;
  const dataType = getLastUriSegment(url);

  return (
    constants.apiEntities.includes(dataType) &&
    require(`../raw_data/${dataType}.json`)
  );
};

module.exports = { getApiHandler, defaultApiHandler };
