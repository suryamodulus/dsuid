const dsuid = require("../index");

function test(count) {
  const start = Date.now();
  for (let i = 0; i < count; i++) {
    console.log(dsuid());
  }
  console.log(`${count} Ids generated in ${(Date.now() - start) / 1000} s`);
}

test(10000);
