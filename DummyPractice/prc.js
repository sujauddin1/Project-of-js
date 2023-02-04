// let count=0
// let value=document.querySelector("#value");
// let buttons=document.querySelectorAll(".btn");
// buttons.forEach((btn)=>{
//     btn.addEventListener("click",(e)=>{
//         const style=e.currenttarget.classList;
//         if(style.contain("increament")){
//             count++;
//         }else if(style.contain("decreament")){
//             count--;
//         }else{
//             count=0;
//         }
//         if(count>0){
//             value.style.color = "red";
//             }
//             if(count <0){
//                 value.style.color= "green";
//             }if(count===0){
//                 value.style.color="brown";
//             }
//         value.textContent=count;
//     })
// })
// let header=document.querySelector(".value");
// const changecolor=()=>{
// header.style.backgroundColor="green";
// };
function toggleHide(){
    let btn=document.getElementById("btn");
    let div=document.getElementById("div");
    if(div.style.display !=="none"){
       div.style.display ="none"
    } else{
        div.style.display ="block"
    }
}