let userInput;
userInput = +prompt ('Введите число', '')
if (isNaN(userInput) || userInput === 0)
    console.log('Упс, кажется, вы ошиблись')
else {
    if ((userInput % 2) === 0)
        console.log('Четное')
    else
        console.log('Нечетное')
}

