
var num;
var input1;
var input2;
function add(){
    alert("f");
    //let input1 = document.querySelector(".numberOne").value;
    //let input2 = document.querySelector(".numberTwo").value;
    input1=document.getElementById("a").value;
    input2=document.getElementById("b").value;
    num =parseInt(input1) + parseInt(input2);
    document.getElementById("hello").innerHTML=num;
    
}
// Function is a to do list


function add(){
    // 1. get the numbers from out inputs
    //      - use variables to save the numbers
    // 2. add the two numbers together
    //      - use variables to save the numbers
    // 3. show answer in display

    var numberone = document.querySelector(".numberone").value
    var numbertwo = document.querySelector(".numbertwo").value
    var thevalue = parseInt(numberone) + parseInt(numbertwo) 

    document.querySelector(".display").innerHTML=thevalue

    
    
}
function minus(){
    var numberone = document.querySelector(".numberone").value
    var numbertwo = document.querySelector(".numbertwo").value
    var thevalue = parseInt(numberone) - parseInt(numbertwo) 

    document.querySelector(".display").innerHTML=thevalue
}
function divide(){
    var numberone = document.querySelector(".numberone").value
    var numbertwo = document.querySelector(".numbertwo").value
    var thevalue = parseInt(numberone) / parseInt(numbertwo) 

    document.querySelector(".display").innerHTML=thevalue
}
function multiply(){
    var numberone = document.querySelector(".numberone").value
    var numbertwo = document.querySelector(".numbertwo").value
    var thevalue = parseInt(numberone) * parseInt(numbertwo) 

    document.querySelector(".display").innerHTML=thevalue
}