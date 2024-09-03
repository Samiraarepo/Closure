// 0
// what is callback hell
// getData(
//   function (result1) {
//     processData(
//       result1,
//       function (result2) {
//         saveData(
//           result2,
//           function (result3) {
//             notifyUser(
//               result3,
//               function (result4) {
//                 console.log("Process complete");
//               },
//               function (error4) {
//                 console.error("Error notifying user");
//               }
//             );
//           },
//           function (error3) {
//             console.error("Error saving data");
//           }
//         );
//       },
//       function (error2) {
//         console.error("Error processing data");
//       }
//     );
//   },
//   function (error1) {
//     console.error("Error getting data");
//   }
// );

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
// challenge : create function that Throttling scroll event
function throttle(func, limit) {
  let lastFunc;
  let lastRan;

  return function () {
    const context = this;
    const args = arguments;

    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Example usage: Throttle scroll event
window.addEventListener(
  "scroll",
  throttle(function () {
    console.log("Throttled scroll event triggered");
  }, 1000)
); // Throttle to trigger the scroll event every 1000ms (1 second)

//FCC
function throttle(func, delay) {
  let timeout = null;
  return () => {
    if (!timeout) {
      func();
      timeout = setTimeout(() => {
        timeout = null;
      }, delay);
    } else {
    }
  };
}

// 03
// challenge : create function that debouncing scroll event

function debounce(func, delay) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      func.apply(context, args);
    }, 1000);
  };
}
// Example usage: Debounce scroll event
window.addEventListener(
  "scroll",
  debounce(function () {
    console.log("Debounced scroll event triggered");
  }, 1000)
); // Debounce to trigger the scroll event after 1000ms (1 second) of no scrolling

// 04
// Promise
// challenge : make promise base setTimeout function
