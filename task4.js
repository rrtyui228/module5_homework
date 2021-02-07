let arr = [];
for (let i = 0; i <= 100; i++) {
    arr[i] = i;
}
let result = arr[Math.floor(Math.random() * arr.length)]
console.log(result)