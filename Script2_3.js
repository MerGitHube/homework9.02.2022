let arr = [1, 2, 6, 2, 98, 23, 13, 1, 2, 43, 0, -1, -45];
let max = 0, index = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        index = i;
    }
}

console.log("Մեծագույն տարր =", max, `\n\t`, "Առաջին մեծագույն տարրի կարգահամարը =", index)