let X = null;
switch (typeof X) {
    case 'number':
        alert('X is a number')
        break
    case 'string':
        alert('X is a string')
        break
    case 'boolean':
        alert('X is a boolean')
        break
    default:
        alert('Idk what type is X')
}