const constants = require("../generic/constants");
const { getLastUriSegment } = require("../generic/utils");
const { getApiHandler, defaultApiHandler } = require("./controller");

const routes = (request, response) => {
  const { url, method } = request;

  if (
    method === "GET" &&
    constants.apiEntities.includes(getLastUriSegment(url))
  ) {
    if (url === "/favicon.ico" || "") return null;

    getApiHandler(request, response);
  } else {
    defaultApiHandler(request, response);
  }
};

module.exports = { routes };
