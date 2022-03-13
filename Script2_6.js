let arr = [1, -8, 5, -9, 5, 6, 7, -3];
let arr1 = [];
let j = 0, k = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
        arr1[j] = arr[i];
        j++
    }
    else {
        arr1[arr.length - 1 - k] = arr[i]
        k++
    }
}
console.log(arr1)