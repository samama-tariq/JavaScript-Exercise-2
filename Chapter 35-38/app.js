// Task 1
// function current_date_and_time(){
//     var result=new Date();
//     return result;
// }
// let x=current_date_and_time();
// document.write(x);

// Task 2
// function greeting(x,y){
//     alert("Hello "+x+" "+y);
// }
// var f_name=prompt("Enter first name: ");
// var l_name=prompt("Enter last name: ");
// greeting(f_name,l_name);

// Task 3
// function sum_by_user(){
//     let x=prompt("Enter first number: ");
//     let y=prompt("Enter second number: ");
//     let sum=parseInt(x)+parseInt(y);
//     alert("Sum= "+sum);
// }
// sum_by_user();

// Task 4
// function calculator(x,y,z){
//     let new1=parseInt(x);
//     let new2=parseInt(y);
//     if(z==='+'){
//         // return x+y
//         alert("Result= "+new1+new2);
//     }
//     else if(z==='-'){
//         alert("Result= "+new1-new2);
//     }
//     else if(z==='*'){
//         alert("Result= "+new1*new2);
//     }
//     else if(z==='/'){
//         alert("Result= "+new1/new2);
//     }
// }
// let data1=prompt("Enter num 1");
// let data2=prompt("ENter num 2");
// let op=prompt("Enter operation (+,-,*,/)");
// calculator(data1,data2,op);

// Task5

// function square(x){
//     let num=parseInt(x);
//     let result=Math.pow(num,2);
//     alert("Square of number is: "+result);
// }
// var data=prompt("Enter the number you want to square: ")
// square(data);

// Task 6

// function factorial(x){
//     let num=parseInt(x);
//     let fact=1;
//     for(var i=1; i<=num; i++){
//         fact=fact*i;
//     }
//     alert("Factorial of given number is= "+fact);
// }
// var data=prompt("Enter the number you want factorial of: ");
// factorial(data);

// Task 7
// function counting(x,y){
//     let num1=parseInt(x);
//     let num2=parseInt(y);
//     document.write("Counting: "+"</br>");
//     for(var i=num1; i<=num2; i++){
//         document.write(i+"</br>");
//     }
// }
// var data1=prompt("Enter starting point:");
// var data2=prompt("Enter ending point: ");
// counting(data1,data2);