let calc = document.querySelector('.calc'),
    output = document.querySelector('.calc__output');

let currentNumber = '',
    prevNumber = '',
    res = [];

clearAllValue();


calc.addEventListener('click', (event) => {
    let buttonValue = event.target.id;

    checkButtonValue(buttonValue);  
});


function checkButtonValue(buttonValue) {
    let btnVal;
    switch (buttonValue) {
        case '': 
            break;
        case 'ac': 
            clearAllValue();
            break;
        case 'change_sign': 
            changeSign();
            break;
        case 'clear_last_sign': 
            clearLastSign();
            break;
        case 'float': 
            addFloat();
            displayCurrentNumber();
            break;
        case 'product':
            btnVal = product();
            if (btnVal) {res.push(btnVal, '+')};
            console.log(res);
            break;
        case 'difference':
            btnVal = difference();
            if (btnVal) {res.push(btnVal, '-')};
            break;
        case 'multiplication':
            btnVal = multiplication();
            if (btnVal) {res.push(btnVal, '*')};
            break;
        case 'division':
            btnVal = division();
            if (btnVal) {res.push(btnVal, '/')};
            break;
        case 'result':
            setResult(res);
            break;
        default:
            setCurrentNumber(buttonValue);
            displayCurrentNumber();
    }
}



function displayCurrentNumber() {
    output.innerText = currentNumber;
}

function clearAllValue() {
    output.innerText = '0';
    currentNumber = '';
    prevNumber = '';
    res.length = '';
}
function clearCurrentNumber(){
    currentNumber = '';
}
function clearResult() {
    res.length = 0;
}

function setCurrentNumber(buttonValue) {
    if(currentNumber === '0') {
        currentNumber.slice(0,1);
        currentNumber = '';
    };
    currentNumber += buttonValue;
}
function addFloat() {
    console.log(res);
    if (!currentNumber) {
        return currentNumber = '0.'
    } else if( currentNumber.includes('.')) {
        return;
    } else {
        return currentNumber += '.';
    }
}
function product() {
    prevNumber = currentNumber;
    clearCurrentNumber();
    if (res[res.length - 1] === '+') {return};
    return prevNumber;
}
function difference() {
    prevNumber = currentNumber;
    clearCurrentNumber()
    return prevNumber;
}
function multiplication () {
    prevNumber = currentNumber;
    clearCurrentNumber();
    return prevNumber;
}
function division () {
    prevNumber = currentNumber;
    clearCurrentNumber();
    return prevNumber;
}
function changeSign() {
    currentNumber = +currentNumber;
    if (currentNumber === 0) {return};
    if (currentNumber > 0) {
        currentNumber = '-' + currentNumber
    } else {
        currentNumber = currentNumber + '';
        currentNumber = currentNumber.slice(1);
    }
    
    displayCurrentNumber();
}
function clearLastSign() {
    if (currentNumber === '0') {return};
    currentNumber = currentNumber.slice(0, -1);
    if(currentNumber.length === 0) {currentNumber = '0'};
    displayCurrentNumber();
}

function setResult(res) {
    let result;
    if (res.length === 0 && currentNumber === '') {return};
    res.push(currentNumber);
    result = res.join('');
    result = eval(result);
    if (result === 0.30000000000000004) {result = 0.3};
    result += '';
    if (result < 1 && result.length > 14) {
        result = +result;
        result = result.toFixed(14);
    };
    // if (result > 1e16)
    output.innerText = result;
    clearResult();
    currentNumber = result;
}














/*  
1 натиснення двох різних знаків підряд
2. переповнення строки виведення

*/
























// let prevNumber = 0,
//     currentNumber = 0,
//     sign,
//     str = '0'
//     arr = [];
//     clearStr (str);

// calc.addEventListener('click', (event) => {
//     let buttonValue = event.target.id;

//     if(event.target === 'undefined') {};

//     switch (buttonValue) {
//         case 'product': 
//             +prevNumber;
//             prevNumber += +currentNumber;
//             console.log(prevNumber);
//             clearStr ();
//             break;
//         default:
//             if (buttonValue === 'ac') {
//                 clearStr ();
//             } else {
//                 currentNumber += buttonValue;
//                 outputStr();
//             }
//     }

// });





// function outputStr() {
//     output.innerText = currentNumber;
// }

// function clearStr () {
//     output.innerText = str;
//     currentNumber = '';
//     prevNumber = 0;
// }