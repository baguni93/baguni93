let add = function (x, y) {
  this.result = x + y;
};

let obj = {};

add = add.bind(obj); //this = obj
add(3, 4);

console.log(obj);
console.log(obj.add);
