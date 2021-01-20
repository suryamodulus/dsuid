function unpack(str) {
  let bytes = [];
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i).toString(16);
    bytes.push(char);
  }
  return bytes.join("").toUpperCase();
}

module.exports = unpack;
