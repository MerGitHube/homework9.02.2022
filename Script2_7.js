let arr = [1, 2, 3, 3, 3, 4, 5, 5, 5, 5, 5, 5, 5, 6, 7, 8, 8, 7, 7, 3, 3, 1, 2];
let obj = {}, max = 0, key = 0;
for (let elem of arr) {
    if (obj[elem]) {
        obj[elem]++
    }
    else {
        obj[elem] = 1;
    }
}
for (let [k, v] of Object.entries(obj)) {
    if (v > max) {
        max = v;
        key = k;
    }
}
key = Number(key);
console.log(key);