// * 매개변수를 배열로 받을 예정.
// * typeof(arrayData) === string
function first(arrayData : string[]) : string[] {
  // 프로그래밍 추천 코딩 방식 #1 - 만들려는 함수에 주석으로 무엇을 할지 명시하고 작업을 진행하기.
  //예시 ↓
  // 1. 첫번쨰 배열 인덱스의 변환하는 함수를 만들고 싶다.
  let result : string = "강지민";
  let arr : string[] = arrayData;
  // ? 논제, 만일 받은 배열의 "최대건"을 바꾸고 싶다면 어떻게 하면 되는가?
  // * ...전개 연산자.
  // * reduce()
  // * map()
  // * push();
  // 방법 1, map()
  arr.map((value,index,array)=>{
    if(value === "최대건"){
      array[index] = result;
    }
  })
  // 방법 2, reduce()
  // let finalresult : string[] = arr.reduce((array,currVal,currIndex)=>{
  //     if(currVal === "최대건"){
  //       array[currIndex] = result;
  //     }
    
  //   return currVal;
  // }, arr);
  return arr;
}
function second(arrayData : string[], insertString: string) : string[]{
  // 방법 3, 전개 연산자 방법
  // * 1
  arrayData.shift();
  // * 2
  let combineArray : string[] = [];
  // * 4
  combineArray = [insertString, ...arrayData];
  // * 5
  return combineArray;
}


let data = ["최대건", "정성철", "허진", "이세민"];

console.log(first(data));
console.log(second(data, "강지민"));