// node challenges/add-first.js
const addOrange = addFirst("orange");
// const test = addOrange(["red", "blue", "green"]);
console.log(addOrange(["red", "blue", "green"]));

console.log(addOrange(["blue", "blue", "blue"]));
// [orange,blue,blue,blue]
// function newfucnt(arr, callback) {
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const item = callback(arr[i]);
//     // if (callback(item)) {
//     newarr = [...newarr, item];
//     // }
//   }
//   console.log(newarr);
//   return newarr;
// }

//proper way to do a map

function map(arr, callback) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const modifiedItem = callback(item);
    newArray[newArray.length] = modifiedItem;
  }
  return newArray;
}

const myArray = [1, 2, 3, 4];
const newArray = map(myArray, (num) => num * 2);

//proper filter method
function filter(arr, callback) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (callback(item)) {
      filteredArr[filteredArr.length] = item;
    }
    return filteredArr;
  }
  return filteredArr;
}
console.log(filter(myArray, (x) => x <= 2));
