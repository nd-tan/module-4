// function total(num:number){
//   function fiboanci(num:number):any{
//     if(num<=1) return 1;
//     return fiboanci(num -1)+ fiboanci(num-2);
//   }
//   let sum: number =0;
//   let n1 = 0, n2 = 1, nextTerm=n1 + n2;
//    for (let i = 1; i <=num; i++) {
//     sum+=n1;
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }
//    return sum;

// }

// console.log(total(2));

function isPrime(number: number): boolean {
  let isPrime = true;
  if (number < 2) {
      isPrime = false;
  } else if (number > 2) {
      for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i == 0) {
              isPrime = false;
              break;
          }
      }
  }
  return isPrime;
}
console.log(isPrime(51));

// let array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
// let sum = 0;
// for (let number of array) {
//     if (isPrime(number)) {
//         sum += number;
//     }
// }
// console.log("Tổng các số nguyên tố trong mảng trên là: " + sum);
