const { CUSTOM_EPOCH } = require("./constants");

function getTimestamp() {
  return Date.now() - CUSTOM_EPOCH;
}

module.exports = getTimestamp;
