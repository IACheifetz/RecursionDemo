function sumUp() {
    const arrSum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0);
    return arrSum;
}
console.log(sumUp());
