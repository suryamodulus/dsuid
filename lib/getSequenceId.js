const { MAX_SEQUENCE_ID } = require("./constants");

let cache = {};

function getSequenceId(namespace) {
  let seqId = cache[namespace];
  seqId = (seqId + 1) & MAX_SEQUENCE_ID;
  cache[namespace] = seqId;
  return seqId;
}

module.exports = getSequenceId;
