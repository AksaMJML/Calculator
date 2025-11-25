let result = document.getElementById('result');

function appendNumber(num) {
    if (result.value === '0') result.value = '';
    result.value += num;
}

function appendOperator(op) {
    let lastChar = result.value.slice(-1);
    if ('+-*/'.includes(lastChar)) return;
    result.value += op;
}

function clearResult() {
    result.value = '';
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    try {
        result.value = eval(result.value) || '';
    } catch {
        result.value = 'Error';
    }
}