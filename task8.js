let rieltorInfo = new Map([
    ['name', 'Alex'],
    ['city', 'Moscow'],
    ['age', '18'],
    ['hobby', 'tennis'],
    ['country', 'Russia']
])

function getMap() {
    let keys = []
    for (let key of rieltorInfo.keys()) {
        keys.push(key)
    }

    let values = []
    for (let value of rieltorInfo.values()) {
        values.push(value)
    }

    for (let i = 0; i < rieltorInfo.size; i++) {
        console.log(`Key - ${keys[i]}, Value - ${values[i]}`)
    }
}

getMap()