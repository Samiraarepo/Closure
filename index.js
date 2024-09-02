// Create a Counter with Limited Increments

function createLimitedCounter() {
  let count = 0;

  return function (limit) {
    if (counter < limit) {
      count++;
    } else {
      console.log(`Counter is bigger than limit.`);
    }
  };
}
console.log(createLimitedCounter(100));
