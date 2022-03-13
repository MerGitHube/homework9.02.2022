let str1='dhdFh164168F*$.,<>/()[]]*^%$kITFYT';
let arr1=str1.split('');
arr2=arr1.map(tar => {
    if(tar!==tar.toUpperCase()){
    return tar
    }
    return;
})
arr2 = arr2.filter(tar => tar!==undefined);
let str2='';
for(let i=0; i<arr2.length; i++){
    str2+=arr2[i];
}
console.log(str2);




