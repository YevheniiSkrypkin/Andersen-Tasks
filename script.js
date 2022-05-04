const num1 = +prompt('Enter a number');
const num2 = +prompt('Enter a second number');

function numeralSys(arg1, arg2) {
    return console.log(parseInt(arg1, 10).toString(arg2));
}

if (isNaN(num1) || isNaN(num2)) {
    console.log('Некорректный ввод!');
}
else {
    numeralSys(num1, num2);
}