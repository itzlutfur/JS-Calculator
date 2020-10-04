function calculate(){
    var first = parseFloat(document.getElementById('first').value);
    var second = parseFloat(document.getElementById('second').value);
    var operator = document.getElementById('operators').value;

    if(operator === 'plus'){
        var result = document.getElementById('result').value = +first + +second;
    }
    if(operator === 'minus'){
        var result = document.getElementById('result').value = first - second;
    }
    if(operator === 'multiplication'){
        var result = document.getElementById('result').value = first * second;
    }
    if(operator === 'division'){
        var result = document.getElementById('result').value = first / second;
    }
}