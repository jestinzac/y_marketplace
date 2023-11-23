const getLastUriSegment = (uriSegment) => uriSegment?.split("/").pop() || null;

module.exports = {
  getLastUriSegment,
};
