const NodeCache = require("node-cache");
const myCache = new NodeCache();
const { SEQUENCE_BITS } = require("./constants");

const MAX_SEQUENCE_ID = Math.pow(2, SEQUENCE_BITS) - 1;

function getSequenceId(namespace) {
  let seqId = myCache.get(`${namespace}SeqId`);
  seqId = (seqId + 1) & MAX_SEQUENCE_ID;
  myCache.set(`${namespace}SeqId`, seqId);
  return seqId;
}

module.exports = getSequenceId;
