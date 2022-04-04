var num1="";
var num2="";
var op ="";
var answer=0;
var count=0;
var display=(document.querySelector('#display'))


function press(newnum){
    if(count==0){
        num1+=newnum;
        display.innerText=num1;
    }
    else{
        num2+=newnum
        display.innerText=num2;
    }
    
}

function setOP(newop){
    
    count++;
    if (count>1){
        alert("Only 2 numbers at a time for now :(")
    }
    else{
        op=newop;
    }
}

function calculate(){
    if(op=='+'){
        answer=parseFloat(num1)+parseFloat(num2);
    }
    if(op=='-'){
        answer=parseFloat(num1)-parseFloat(num2);
    }
    if(op=='*'){
        answer=parseFloat(num1)*parseFloat(num2);
    }
    if(op== '/'){
        answer=parseFloat(num1)/parseFloat(num2);
    }
    display.innerText=answer;
}

function clr(){
    answer=0;
    count=0;
    num1="";
    num2="";
    display.innerText=(0);
}


// to make it work with numbers, use array to store numbers and operaters mayvbe?