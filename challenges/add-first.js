// [orange,red,blue,green]
const addOrange = addFirst("orange");

console.log(addOrange(["blue", "blue", "blue"]));
// [orange,blue,blue,blue]
const callback = [];
function addOrange(arr, addOrange) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    addFirst(item);
  }
}
// const addOrange = addFirst("orange");
// const test = addOrange(["red", "blue", "green"]);
console.log(addOrange(["red", "blue", "green"]));
addFirst(assets, (obj) => (obj.value *= 6));
console.log(assets);

// function map(arr, callback) {}
// const myArray =
// node challenges/add-first.js
