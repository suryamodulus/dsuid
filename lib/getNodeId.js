const getMAC = require("../utils/getMac");
const hashCode = require("../utils/hashCode");
const unpack = require("../utils/unpack");
const { NODE_ID_BITS } = require("./constants");

const MAX_NODE_ID = Math.pow(2, NODE_ID_BITS) - 1;

function getNodeId() {
  return hashCode(unpack(getMAC())) & MAX_NODE_ID;
}

module.exports = getNodeId;
