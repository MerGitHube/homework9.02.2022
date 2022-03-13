let arr = [1, -2, 9, -7, 9, 1, 2, 56, 78];
let i = 0;
for (let elem of arr) {
    if (elem > 0 && elem % 2 !== 0) {
        i++
    }
}
console.log(i);
