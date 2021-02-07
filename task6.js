let arr = []
for (let i = 0; i <= 200; i++) {
    arr[i] = i
}

let element = arr[0]
let check = arr.every (function (variable) {
    return variable === element
})

console.log(check)
