// let a=[1,2];
// a.push(3,4,5,6,7);
// console.log(a);
// let a=[1,2,3,4,5,6];
// a.pop();
// console.log(a);
// let a=[1,2,3,4,5,6];
// a.shift();
// console.log(a);
// let b=[1,2,3,4,5,6];
// b.unshift(3);
// console.log(b);
// let c=[1,2,3,4,5,6];
// c.splice(0,1,100);
// console.log(c);
// let d=[1,2,3,4,5,6];
// d.slice(2);
// console.log(d.slice(0,3));
// let a=["hey whats upp"]; it doesn't modify the original array
// console.log(a);
// let b=["their is nothing"];
// console.log(b);
// const result=a.concat(b);
// console.log(result);
// const product=[
//     {
//         id:22,
//         name:"Product A"

//     },
//     {
//         id:44,
//         name:"Product D"

//     },
//     {
//         id:2,
//         name:"Product A"

//     }
// ]
// const newproduct=product.find((product)=>{
//     return product.id===2;

// })
// console.log(product); //It doesn't change the original array!
// console.log(newproduct);

// splice method!!!!!
// let arr=[1,2,3,4,5,6,7];
// console.log(arr);
// let newarr=arr.splice(1,3,"A","B","C"); //it change  the original array!
// console.log(arr);
//concat!!!!
// let a=[1,2,3,4];
// console.log(a);
// let b=[5,6,7,8];
// console.log(b);
// const result=a.concat(b);
// console.log(result);
//join method!!!!
// let a=["the world"];
// console.log(a);
// let b=["to me"];
// console.log(b);
// const result=a.join(b );
// console.log(result);
//reduce !!!!!!!!!!
// const nums=[10,20,30,40,50];
// const reducemethod=nums.reduce(function(acc,cur){
//     return acc*2;
// })
// console.log(reducemethod);

// let arr=["1","2","3","4","5","6","7"];
// console.log(arr);
//  const set=arr.toString();
//  console.log(set);
//  let arr=[12,34,54,654,765,24,2,5,3,1,433,23];
//  console.log(arr);
//  const result=arr.sort();
//  console.log(result);


    
// const nums=[10,20,30,40,50,50,60,10,20];
// const duplicates=nums.reduce(function (acc,cur) {
  // acc [cur] ? (acc[cur]=acc[cur]+1) :(acc[cur]=1);
//   return acc;
// },{})
// console.log(duplicates)
//   let theobj=[
// {key:20,value:10 },

// {key:43,value:30},

// {key:65,value:40},

// {key:99,value:50},

// {key:75,value:20},

// {key:33,value:60}


// ]
// const result=theobj.map(({key,value})=>({[key]:value}))
// console.log(result);
// console.log(theobj);
  
        //map method\\
  // let arr=[1,2,3,4,5,6,7,8,9];
  //  const result=arr.map(double); 

  //  function double(item,index,array){
  // console.log("item :" +  item  +  " index :"  +  index  + " array :"  +  array   );
  //  }
  // let newarr=[1,2,3,4,5,6,7,8,9];
  // const morearr=newarr.map(double);
  // function double(value){
  //   return value * 2;
  // }
  // console.log(morearr)
 
  // let and =[23,44,53,544,542,522,221];
  // const you=and.map(divide);
  // function divide(item){
  //    return item /2;
  // }
  // console.log(you);
   
  // let sample =[23,44,53,544,542,522,221];
  // const top=sample.map(minus);
  // function minus(item){
  //   return item-10;
  // }
  // console.log(top)

  // let drop =[1,2,3,4,5,6,7,8,9];
  //  drop.forEach(function(value,index,array){
  //  console.log("value :" + value + "index :" + index , "array :" + array);

  // }) 
  //split method of array!
  // const x="hello world";
  // const wel=x.split("");
  // console.log(wel);
  // let lettercounter =[]; 

// const product =[
  
//   { Name1:"productA",
//   price:100,},
//   { Name2:"productB",
//   price:150,},
//   { Name3:"productC",
//   price:200,},
//   { Name4:"productD",
//   price:300,},

// ]
// const result=product.reduce((totalprice,product)=>{
//   return totalprice + product.price
// },0);
// console.log(result); 


// let arr=[1,3,5,32,63,765,2,3,4,5];
// const arr2=arr.push(6);
// console.log(arr);
// const arr2=arr.pop();
// console.log(arr);
// const arr2=arr.unshift(0);
// console.log(arr);
// const arr2=arr.sort((a,b)=> a>b? -1:1);
// console.log(arr);


// const arr = ["x","a","x", "y", "c", "d", "t", "s"]; 
// const arr2=arr.sort((a,b)=> a>b?-1:1)
// console.log(arr);

// const sample=[1,2,3,4,5,6];
// const num=[7,8,9];
// const result=num.concat(sample);
// console.log(result);

// let sample=[
  
// {
//   productA:"iphone",
//   price:1500
// },
// {
//   productB:"tv",
//   price:5000
// },
// {
//   productC:"frige",
//   price:500
// },
// {
//   productD:"camera",
//   price:1000
// }

// ];
// const result=sample.filter((item)=>{
//  return sample === item.price
// })
// console.log(result);



let arr=[1,2,3,4,5]
let a= prompt("enter a number")
a=Number.parseInt()
arr.push(a)
let n=arr.map((x)=>{
return x*x;
})
console.log(n);
console.log(arr);