//a variable for fib
//take variable add to previous number
function fib(test) {
  if (test === 1) return 1;
  return fib(test - 1) + 1;
}

function fibo(n) {
  //   if (n === 1) return 1;
  if (n <= 0) return 0;
  y = n - 1;
  x = n - 2;
  h = y + x;
  return h;
  //   return fibo(n - 2) + (n - 1);

  //   x(n) = x(n-2) + F(n-1)
  //   return y;
}

console.log(fibo(fib(8)));

// proper way to fibonacci (with speed boost aka memo)
let memo = { 0: 0, 1: 1 };
function fib(num) {
  if (num <= 1) return num;
  else if (memo[num]) return memo[num];
  return fib(num - 1) + fib(num - 2);
}
console.log(fib(8));
