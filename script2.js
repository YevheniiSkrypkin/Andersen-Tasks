const NUM1 = +prompt('Enter a number');
const NUM2 = +prompt('Enter a second number');

function sumQuot(arg1, arg2) {
    if (isNaN(arg1) || isNaN(arg2)) {
        return console.log('Некорректный ввод!');
    }
    const SUM = arg1 + arg2;
    const QUOT = arg1 / arg2;
    console.log(`${SUM}, ${QUOT}`);
}
sumQuot(NUM1, NUM2);