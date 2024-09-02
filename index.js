// Create a Counter with Limited Increments
// 01
function createLimitedCounter(limit) {
  let count = 0;

  return function () {
    if (count < limit) {
      count++;
      console.log(`Count: ${count}`);
    } else {
      console.log(`Limit reached!`);
    }
  };
}
const counter = new createLimitedCounter(4);

counter();
counter();
counter();
counter();

// 02
