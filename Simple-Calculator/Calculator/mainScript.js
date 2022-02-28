var flag = false;
var temp = '';
const operators = ["+", "-", "*", "/"];


function insert(data) {
    //for (data in operators) {
    if (data in operators) {
        temp = document.getElementById('res').value + data;
        clears();
        //backspace();
        flag = true
    }

    if (flag) {
        document.getElementById('res').value = document.getElementById('res').value + data;
        flag = false;
    }
    document.getElementById('res').value = document.getElementById('res').value + data;
}


function backspace() {
    var cur_val = document.getElementById('res').value
    document.getElementById('res').value = cur_val.substring(0, cur_val.length - 1);
}


function clears() {
    s = document.getElementById('res').value = '';
    return s
}


function operation() {
    var exp = document.getElementById('res').value
    if (exp) {
        if (temp) {
            document.getElementById('res').value = eval(temp + exp);

        } else {
            document.getElementById('res').value = eval(exp);
        }
        flag = true;
    }
}

