function getTriangle(base, height) {
  return (base * height) / 2;
}

console.log('삼각형의 면적:' + getTriangle(5, 2));

//함수 리터럴 표현으로 정의
//함수 리터럴(Function Literal)은 소스 코드 내에서 함수를 정의하고,
//그 함수 자체를 값(value)으로 직접 표현하는 방식

//익명함수
//변수에 배정해서 사용
var getTriangle_02 = function (base, height) {
  return (base * height) / 2;
};

console.log('삼각형의 면적:' + getTriangle_02(5, 2));

//화살표 함수 (람다함수)
let getTriangle_03 = (base, height) => {
  return (base * height) / 2;
};

console.log('삼각형의 면적:' + getTriangle_03(base, height));

let getTriangle_04 = (base, height) => (base * height) / 2;
let getCircle = (radius) => radius * radius * Math.PI;

console.log('삼각형의 면적:' + getTriangle_04(base, height));
console.log('삼각형의 면적:' + getCircle(5));
