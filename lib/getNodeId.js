const { getMAC } = require("../utils/getMac");
const hashCode = require("../utils/hashCode");
const unpack = require("../utils/unpack");
const { MAX_NODE_ID } = require("./constants");

function getNodeId() {
  return hashCode(unpack(getMAC())) & MAX_NODE_ID;
}

module.exports = getNodeId;
