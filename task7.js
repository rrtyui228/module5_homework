let arr = []
for (let i = 0; i <= 200; i++) {
    arr[i] = i
}
arr.unshift('heloworld', 0, null, NaN)

const clearedArray = arr.filter(function (element) {
    return Number(element)
})

function getEvenArray() {
    let evenArray = clearedArray.filter(function (b) {
        return b % 2 === 0
    })
    return console.log(evenArray.length)
}

function getOddArray() {
    let oddArray = clearedArray.filter(function (b) {
        return b % 2 !== 0
    })
    return console.log(oddArray.length)
}

function getNull() {
    let nullArray = arr.filter(function (b) {
        return b === 0 || b === null
    })
    return console.log(nullArray.length)
}

getEvenArray()
getOddArray()
getNull()