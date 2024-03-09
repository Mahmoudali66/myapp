var BillInput = document.querySelector('#bill');
var numofPeopleInput = document.querySelector('#numpeople');

var screen1 = document.querySelector('#result1');
var screen2 = document.querySelector('#result2');

var customInput = document.querySelector('#custom2');
var btn5 = document.querySelector('#btn5%');
var btn10 = document.querySelector('#btn10%');
var btn15 = document.querySelector('#btn15%');
var btn25 = document.querySelector('#btn25%');
var btn50 = document.querySelector('#btn50%');

function reset1() {
    customInput.value = "";
    BillInput.value = "";
    numofPeopleInput.value = "";
    screen1.textContent = "$0.00";
    screen2.textContent = "$0.00";
}

var percentage = 0;

function b5(){
    percentage = 0.05;
}
function b10(){
    percentage = 0.1;
}
function b15(){
    percentage = 0.15;
}
function b20(){
    percentage = 0.2;
}
function b25(){
    percentage = 0.25;
}
function b50(){
    percentage = 0.5;
}
function special(){
    percentage = customInput.value / 100;
}

function tipAmount(){
    if(numofPeopleInput.value != 0){
        screen1.textContent = `$ ${(BillInput.value * percentage / numofPeopleInput.value).toFixed(1)}`;
    }
}

function amount(){
    if(numofPeopleInput.value != 0){
        screen2.textContent = `$ ${(BillInput.value / numofPeopleInput.value + (BillInput.value * percentage / numofPeopleInput.value)).toFixed(1)}`;
    }
}

