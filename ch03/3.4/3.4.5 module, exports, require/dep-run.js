const dep1 = require('./dep1');
const dep2 = requrie('./dep2');

dep1();
dep2();

//dep1의 module.exports가 함수가 아닌 빈 객체로 표시 - 순환참조 / 예기치 못한 동작 발생