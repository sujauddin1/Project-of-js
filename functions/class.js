// function decleration
// function first(){
//     console.log("inside first function")
// }
// first();
// console.log("outside function");
// const second= function(){
//     console.log("inside the function")
// } 
// second();
// console.log("outside function")
//  function third(a,b,c){
//     console.log(a),console.log(b),console.log(c);
//  }
//  third(20,50,"hi");
// function addition(x,y){
//     console.log(x+y);
// }
//  console.log(addition(2,3));
// function addition(x,y){
//     console.log(x+y);
// }
//  console.log(addition(2,3));
// function addition(x,y){
//     console.log(x*y);
// }
//  console.log(addition(2,3));
// var division= function(x,y){
//     console.log(x/y);
// }
// console.log(division(20,10));
// var modulus= function(x,y){
//     console.log(x%y);
// }
// console.log(modulus(20,10));
// var exponential= function(x,y){
//     console.log(x**y);
// }
// console.log(exponential(20,10));

// const sample=function(x,y){
//     return(x*y);
// }
// console.log(sample(100,100));

// function num (x,y){
//     console.log(x*y);
// }
// num(10,10);
function sample(num){
    let arr= (num*3)/10
    console.log(arr)
}
console.log(sample(10));
function math(num){
    let wel=(num*4)/100
    if(num%2==0){
        return true 
    }else{
        return false
    } 
    console.log(wel)
}
console.log(math(10));