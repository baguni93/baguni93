let displayA = function () {
  console.log('A');
};

let displayB = () => {
  setTimeout(() => {
    console.log('B');
  }, 2000);
};

let displayC = () => console.log('C');

let displayD = (callback) => {
  setTimeout(() => {
    callback();
  }, 1000);
};

displayA();
displayB();
displayC();
displayD(displayA);
