// const sample=document.getElementById("get");
// console.log(sample);
// const sample=document.getElementsByClassName("heading");
// console.log(sample);
// const sample=document.getElementsByTagName("p");
// console.log(sample);
// sample.innerHTML="THIS IS OVER"
// const result=document.querySelector(".para");
// console.log(result);
// // result.
//   let element=document.querySelectorAll(".para");
//   console.log(element);
//   element.innerHTML="<p>this is empty tag</p>";ild(newelement);
   
    //APPEND/ CHILD METHOD....
// let element=document.getElementById("get");
// let create=document.createTextNode("this is second gift");
// element.appendChild(create); 
// console.log(element)

// //   REPLACE CHILD METHOD
// let sample=document.createElement("li");
// let sample2=document.createTextNode("gauva"); 

// sample.appendChild(sample2);

// let target=document.getElementById("get");
// let old =target.children[0];
// target.replaceChild(sample,old)


// let element=document.createElement("li");
// let element2=document.createTextNode("mango");
// element.appendChild(element2);
 
// let word=document.getElementById("get");
// let word2=word.children[1];
// word.replaceChild(element,word2)

// let sample=document.getElementById("small");
// let sample2=document.createTextNode("this is an empty div we fill the div");
// sample.append(sample2);
// console.log(sample);
//set Attribute....
// let attribute=document.getElementById("attribute");
// attribute.setAttribute('class','myclassname');
// console.log(attribute);
 
 
 
// let p =document.getElementById("attribute");
// p.setAttribute("class","myname");
// console.log(attibute);
// let d=p.getAttribute("id");
// console.log(p);
// console.log(d);

// document.getElementById("get").onclick=hello;
// function hello(){
//     document.getElementById("get").style.background="red";
// }

// document.getElementById("para").onclick=jquery;
// function jquery(){
//     document.getElementById("para").style.background="red";
// }

// document.getElementById("para").addEventListener("click",abc);
// document.getElementById("para").addEventListener("click",function(){
//     document.getElementById("para").style.border="10px solid lightgray";
// })


// function abc(){
//     document.getElementById("para").style.background="purple";
// }
// document.getElementById("para").addEventListener("click",abc);
// document.getElementById("para").addEventListener("click",bca);
// function bca(){
//     document.getElementById("para").style.border="5px solid black";
// }






// function abc (){
//     document.getElementById("para").style.background="purple"; 
// }

//     document.getElementById("get").addEventListener("mouseover",get);
//     document.getElementById("get").addEventListener("mouseover",wet);
//     function wet (){
//         document.getElementById("get").style.background="lightgreen";
//     }
    





//     function get(){
//         document.getElementById("get").style.color="brown";
//     }
function toggleHide(){
    let btn=document.getElementById("btn")
    let div=document.getElementById("small");
    if(div.style.display !=="none"){
        div.style.display="none"
    }else{
        div.style.display="block"
    }
}
let result=new Date(3030,11,2,3,3,3,3);
console.log(result);