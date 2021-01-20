/*
Reference
1]https://instagram-engineering.com/sharding-ids-at-instagram-1cf5a71e5a5c
2]https://www.callicoder.com/distributed-unique-id-sequence-number-generator/
*/
const getTimestamp = require("./lib/getTimestamp");
const getNodeId = require("./lib/getNodeId");
const getSequenceId = require("./lib/getSequenceId");
const { EPOCH_BITS, NODE_ID_BITS } = require("./lib/constants");

function dsuid(namespace = "default") {
  let id = BigInt(getTimestamp()) << BigInt(64 - EPOCH_BITS);
  id = id | (BigInt(getNodeId()) << BigInt(64 - EPOCH_BITS - NODE_ID_BITS));
  id = id | BigInt(getSequenceId(namespace));
  return id.toString();
}

module.exports = dsuid;
