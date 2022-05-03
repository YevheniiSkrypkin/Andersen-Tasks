let num1 = +prompt('Enter a number');
let num2 = +prompt('Enter a second number');

function sumQuot(arg1, arg2) {
    if (isNaN(arg1) || isNaN(arg2)) {
        return console.log('Некорректный ввод!');
    }
    else {
        let sum = arg1 + arg2;
        let quot = arg1 / arg2;
        console.log(`${sum}, ${quot}`);
    }
}
sumQuot(num1, num2);