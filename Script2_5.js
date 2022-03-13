let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let elem of arr) {
    sum += elem;
}
let average = sum / arr.length;
console.log(average)
