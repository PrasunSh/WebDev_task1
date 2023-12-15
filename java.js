var flag, exprsn, type, ans;

function equal(flag, type) {
    if (flag == 1)
        TrigoCalc(type);
    else {
        exprsn = document.form.textarea.value;
        document.form.textarea.value = eval(exprsn);
        exprsn = '';
    }
}

function put(num){
    document.form.textarea.value = document.form.textarea.value + num ; 
}

function del() {
    exprsn = document.form.textarea.value;
    document.form.textarea.value = exprsn.substring(0, exprsn.length - 1);
}

function clean() {
    document.form.textarea.value = "";
    flag = '', exprsn = '', type = '', ans = '';
}

function puttri(trig){
    flag = 1;
    if (trig == 'sin') {
        document.form.textarea.value = 'sin ';
        type = 0;
    }
    else if (trig == 'cos') {
        document.form.textarea.value = 'cos ';
        type = 1;
    }
    else if (trig == 'tan') {
        document.form.textarea.value = 'tan ';
        type = 2;
    }
    else if (trig == 'ln') {
        document.form.textarea.value = 'ln ';
        type = 3;
    }
    else if (trig == 'log') {
        document.form.textarea.value = 'log ';
        type = 4;
    }
    else if (trig == '%') {
        document.form.textarea.value = document.form.textarea.value + ' % of ';
        type = 5;
    }
    else if (trig == '!') {
        document.form.textarea.value = document.form.textarea.value + '!';
        type = 6;
    }
    else if (trig == '^') {
        document.form.textarea.value = document.form.textarea.value + ' ^ ';
        type = 7;
    }
    else if (trig == '^2') {
        type = 8;
        equal(flag,type);
    }
    else if (trig == 'sqrt') {
        type = 9;
        equal(flag,type);
    }
    else if (trig == '-1') {
        document.form.textarea.value = "1/";
        type = 10;
    }
    else if (trig == 'invsin') {
        document.form.textarea.value = "arcsin ";
        type = 11;
    }
    else if (trig == 'invcos') {
        document.form.textarea.value = "arccos ";
        type = 12;
    }
}



function TrigoCalc(type) {
    exprsn = document.form.textarea.value;
    ans = exprsn.substring(4);
    if (type == 0) {
        ans = eval(ans);
        ans = ans * ((3.14159265359) / 180);
        document.form.textarea.value = Math.sin(ans);
    }
    else if (type == 1) {
        ans = eval(ans);
        ans = ans * ((3.14159265359) / 180);
        document.form.textarea.value = Math.cos(ans);
    }
    else if (type == 2) {
        ans = eval(ans);
        ans = ans * ((3.14159265359) / 180);
        document.form.textarea.value = Math.tan(ans);
    }
    else if (type == 3) {
        ans = exprsn.substring(3);
        ans = eval(ans);
        document.form.textarea.value = Math.log(ans);
    }
    else if (type == 4) {
        ans = eval(ans);
        document.form.textarea.value = (Math.log(ans)) / 2.303;
    }
    else if (type == 5) {
        var index = exprsn.indexOf('%');
        var num1 = exprsn.substring(0, index - 1);
        var num2 = exprsn.substring(index + 5);
        num1 = eval(num1);
        num2 = eval(num2);
        document.form.textarea.value = (num1*num2)/100;
        
    }
    else if (type == 6) {
        ans = exprsn.substring(0, (exprsn.length - 1));
        document.form.textarea.value = factorial(eval(ans));
    }
    else if (type == 7) {
        var index = exprsn.indexOf('^');
        var base = exprsn.substring(0, index - 1);
        var exprsno = exprsn.substring(index + 2);
        document.form.textarea.value = Math.pow(eval(base), eval(exprsno));
    }
    else if (type == 8) {
        var base = exprsn;
        var exponent = 2;
        document.form.textarea.value = Math.pow(eval(base), exponent);
    }
    else if (type == 9) {
        var base = exprsn;
        var exponent = 0.5;
        document.form.textarea.value = Math.pow(eval(base), exponent);
    }
    else if (type == 10) {
        document.form.textarea.value = eval(exprsn);
    }
    else if (type == 11) {
        ans = exprsn.substring(7);
        ans = eval(ans);
        document.form.textarea.value = Math.asin(ans);
    }
    else if (type == 12) {
        ans = exprsn.substring(7);
        ans = eval(ans);
        document.form.textarea.value = Math.acos(ans);
    }

    exprsn = '';
    ans = '';
}

function factorial(ans) {
    if(ans == 0) return 1;
    else return ans * factorial(ans - 1);
}