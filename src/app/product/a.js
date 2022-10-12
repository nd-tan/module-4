// console.log(123);
// console.log('abc');
// const a=[1,2,3,4];
// const b=[...a,5,6]
// console.log(b);
// const [x, y, ...number] = [1, 2, 3, 4];
// console.log(x, number);
// const c=1;
// let g=[1,2,3,4,5];
// let   g=[1,2,...number];
//     console.log(number);
// function sum(...args) { // args is the name for the array
//   let sum = 0;
//   args.forEach((arg) => sum += arg)
//   return sum;
// }
// enum City {HaNoi, HoChiMinh, DaNang};
// let city: City = City.HaNoi;
// console.log(city);
function getNetPrice(price, discount, format) {
    var netPrice = price * (1 - discount);
    return format ? "$".concat(netPrice) : netPrice;
}
var netPrice = getNetPrice(100, 0.05, true);
console.log(netPrice);
//
