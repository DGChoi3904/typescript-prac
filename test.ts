import {data} from "./module-file"
import {DG} from "./DG"
const a = 1;
const b = 2;

// 실행만 하는 함수 추가
function moreFunction() : void {
  console.log("hi");
}

function c(a : number, b : number) : number{
  return a + b;
}

console.log(c(a,b));