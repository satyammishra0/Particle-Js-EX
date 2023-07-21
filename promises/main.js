// Pending
// Fulfilled
// Rejected

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async test
  // DB Calls

  setTimeout(() => {
    console.log("Async task is ready");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consume");
});
