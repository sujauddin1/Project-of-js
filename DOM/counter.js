//  const sample=document.getElementById("value")
//  const button=document.querySelectorAll(".common");
// button.forEach(function(btn){
//     btn.addEventListner("click",function(e){
//         const btnclasses=Array.from(e.target.classList);
//         if(btnclasses.includes("increament")){
//             count++
//             countervalue.innerHTML="counter: " +count
//         }else if(btnclasses.includes("decreament")){
//             count--
//             countervalue.innerHTML="counter: " +count
//         } else {  
//             count=0
//             countervalue.innerHTML="counter: " +count
//         }
//     })


let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
btn.addEventListener("click",(e)=> {
const styles = e.currentTarget.classList;
if(styles.contains("dec")) {
    count--;

}else if (styles.contains("inc")){
    count++;
}else{
    count=0;
}
if(count>0){
value.style.color = "red";
}
if(count <0){
    value.style.color= "green";
}if(count===0){
    value.style.color="brown";
}
value.textContent= count;
});
});