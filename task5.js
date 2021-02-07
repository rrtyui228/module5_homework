let arr = [];
for (let i = 0; i <= 200; i++) {
    arr[i] = i;
}
let result = arr.length;
console.log(result);
result = arr.map ( function (item) {
    console.log(item)
});