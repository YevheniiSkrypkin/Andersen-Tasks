const NUM1 = +prompt('Enter a number');
const NUM2 = +prompt('Enter a second number');

function numeralSys(arg1, arg2) {
    return console.log(parseInt(arg1, 10).toString(arg2));
}

if (isNaN(NUM1) || isNaN(NUM2)) {
    console.log('Некорректный ввод!');
}
else {
    numeralSys(NUM1, NUM2);
}