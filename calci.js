var b1,b2,b3,b4,b5,b6,b7,b8,b9,b0,b00,bdot,bequl,bplus,bminus,bmlt,bdvd,bprtg,bs,bac;
b1=document.getElementById("b1");
b2=document.getElementById("b2");
b3=document.getElementById("b3");
b4=document.getElementById("b4");
b5=document.getElementById("b5");
b6=document.getElementById("b6");
b7=document.getElementById("b7");
b8=document.getElementById("b8");
b9=document.getElementById("b9");
b0=document.getElementById("b0");
b00=document.getElementById("b00");
bdot=document.getElementById("bdot");
bequl=document.getElementById("bequl");
bplus=document.getElementById("bplus");
bminus=document.getElementById("bminus");
bmlt=document.getElementById("bmlt");
bdvd=document.getElementById("bdvd");
bprtg=document.getElementById("bprtg");
bs=document.getElementById("bs");
bac=document.getElementById("bac");

var dspscrren=document.querySelector(".dspscrren");
var array_dspscreen=[];

function fnct_b1()
{
    numval("1");
}

function fnct_b2()
{
    numval("2");
}

function fnct_b3()
{
    numval("3");
}

function fnct_b4()
{
    numval("4");
}

function fnct_b5()
{
    numval("5");
}
function fnct_b6()
{
    numval("6");
}
function fnct_b7()
{
    numval("7");
}
function fnct_b8()
{
    numval("8");
}
function fnct_b9()
{
    numval("9");
}
function fnct_b0()
{
    numval("0");
}
function fnct_b00()
{
    numval("00");
}
function numval(val)
{
    dspscrren.textContent=dspscrren.textContent.concat(val);
    array_dspscreen.push(val);
    
}

// the all clear button
function fnct_bac()
{
    dspscrren.textContent =""; 
    array_dspscreen = [];
}

// backspace button
function fnct_bs()
{
    if(dspscrren.textContent!="")
    {
       
       array_dspscreen.pop();
       dspscrren.textContent=array_dspscreen.join( "" );
    } 
    
    else
    {
       alert('Screen is empty');
    }
}

//addition button 
var a,b,operation,result;
function fnct_bplus()
{
    operation='+';
    calc_fnctn("+");// here i cleared the array for the next number and has 
    //already stored the first num in the var a 

}

//subtraction button 
function fnct_bminus()
{
    operation='-';
    calc_fnctn("-");
}

//multiplication button
function fnct_bmlt()
{
    operation= 'x';
    calc_fnctn("x");
}

//divide button 
function fnct_bdvd()
{
    operation= '/';
    calc_fnctn("/");
}

//percentage function 
function fnct_bprtg()
{
    operation= '%';
    calc_fnctn("%");
}

//decimal function
function fnct_bdot()
{
    if (!array_dspscreen.includes(".")) {
        // Append a decimal point to the display and array
        dspscrren.textContent = dspscrren.textContent.concat(".");
        array_dspscreen.push(".");
    }
}
//operation function
var num;
function calc_fnctn(num)
{
    if (array_dspscreen.length > 0) {
        // Assign the value before the operation to variable 'a'
        a = array_dspscreen.join("");
        // Update the display to include the operation sign
        dspscrren.textContent = dspscrren.textContent.concat(num);
        // Push the operation sign to the array
        array_dspscreen.push(num);
    }
}

//equals to button

function fnct_bequl() {
    var operationIndex = array_dspscreen.indexOf(operation);
    if (operationIndex !== -1) {
        b = array_dspscreen.slice(operationIndex + 1).join("");
        a = parseFloat(a);
        b = parseFloat(b);
        switch (operation) {
            case '+':
                result = (a + b).toFixed(2);
                break;
            case '-':
                result = (a - b).toFixed(2);
                break;
            case 'x':
                result = (a * b).toFixed(2);
                break;
            case '/':
                result = (a / b).toFixed(2);
                break;
            case '%':
                result = (a % b).toFixed(2);
                break;
            default:
                alert("Error!");
        }
        array_dspscreen = [String(result)];
        dspscrren.textContent = array_dspscreen.join("");
    }
}