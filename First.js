
// //compparion operator
// {const a=5;
//     const b=6;
//     con1 = a<b;
//     con2 = a===5;
//      con3 = a==b ;

//     console.log(con1 && con2);



//     console.log(con1 || con3);}


//     //conditional statement


//     {
//         const age = 80;
//         if( age>18 && age<60 ){
//             console.log("plz enter your cnic");
//         }else
//          if(age>60){
//             console.log("plzz pass")
//         }else{
//             console.log("invalid.....")
//         };
//     }


// //terniary operator
// {
//     a=10;
//     b=5;
//     console.log(a < b?"true":"false");
//     console.log(a === b?"true":"false");
//     console.log(a > b?"true":"false");
// }


// ///switch statment
//   const expression = 'mango';
//   switch(expression){
//     case ('orange'):
//         console.log("false");
//         break;
//         case ('banana'):
//             console.log("false");
//         break;
//        case ('mango'):
//         console.log("true.........mango is available");
//         break;
//         default:
//             console.log("shortage");

        
//   }


//   ///excerise question

// //   {
// //     const marks=prompt("plzz enter grades");
// //     if(marks <= 100 && marks >= 80){
// //         console.log("A",marks);
// //     }else  if(marks <= 89 && marks >= 70){
// //         console.log("B",marks);
// //     }else if(marks <= 69 && marks >= 60){
// //         console.log("c",marks);
// //     }else if(marks <= 59 && marks >= 50){
// //         console.log("d",marks);
// //     }else{
// //         console.log("fail",marks);
// //     }
// //   }


// /// loop 

// // const num4 = prompt("enter num....");
// // let sum = 0; 
// // for(let i=0; i<num; i++){
// //     sum = i+sum;
    
// // }
// // console.log(sum)



// ///for-of

// const Institute="  preston university    ";
// const newInstitute = Institute.trim(); 
// for(let i of newInstitute){
//     console.log(i);
// }



// ///for-in

// const Student = {
//     name:"M.Samiullah",
//     Job:"developer",
//     tech:"javascript"
// }
// for(let i in Student){
//     console.log(Student.Job)
//     console.log(Student.name)
//     console.log(Student.tech)
// }


// ////print num from 0 to 100 even
// let n=0;
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//      console.log(i)
//     }
// }


// //guess correct num game
// // const corr = 2333;
// // let userNum = prompt('enter num.....')

// // while(userNum != corr){
// //   userNum = prompt("enter num again.......you entered wrong ones")
// // }
// // console.log("congrats");




// //string method

// const str = "      hy how are u     ";
// newstr = str.toUpperCase();
// strlength = str.length;
// strlower = str.toLowerCase();
// strtrim = str.trim();

// console.log(str);
// console.log(newstr);
// console.log(strlength);
// console.log(strtrim);


// ///str method pratice prompt,@atStart,full name with length

// // const fullName = prompt("plzz enter Full name");
// // const newName = fullName.length;
// // console.log(newName);
// // const Add = (`@` +fullName+newName);
// // console.log(Add)



// ////Array print all data
// let array = ['ali','ahmed','hassan','sami','sadozai','watan']
// for(let i=0;i<=array.length;i++){
//     console.log(array[i]);
// }


// ////for-of for array

// // // for(let name of array){
// // //     console.log(name.toUpperCase())
// // }

// ///calculate average marks
// let marks = [97,85,37,44,76,60];
// let sum = 0;
// for(let mark of marks){
//     console.log(mark);
//     sum = sum+mark;
//     }
//     console.log(sum);
//     const total = marks.length;
//     const avg = sum/total;
//     console.log(avg);



//     ///calculate offer 10% and print offered price
//     const price = [250,654,345,250,100,200];
//       for(let i=0; i< price.length; i++){
//        let offer = price[i]/10;
//        price[i] -= offer;
//        }
// console.log(price)




// //// push(),Pop(),toString(),concat(),shift(),unShift(),slice(),splice()
// const foodItem =  ["Bnana","Apple","Mango","Orange","chilli"];
// console.log(foodItem.push("Lichi"));
// console.log(foodItem)
// console.log(foodItem.pop());
// console.log(foodItem.toString());

// const foodItem2 = ["corma","baryani","chatmasala","kheer","casturad"]

// const newFood = foodItem.concat(foodItem2);
// console.log(newFood);

// newFood.unshift("savour");
// console.log(newFood);
// newFood.shift("savour");
// console.log(newFood);

// ///// slice always return new array didnot change old one 
// const slice=newFood.slice(1,6);
// console.log(slice)
// ////Splice change original array method to change is (index ,element to change ,new element top add())
// //add element
// newFood.splice(1,4,"watermaloon","almond","dates")
// console.log(newFood)
// //delete element
// newFood.splice(7,9)
// console.log(newFood)


// ////// practice question of array method// create array["Bloomberg","microsoft","uber","google ","ibm","netflix"]
// //a) remove first
// //b)remove uber add ola in place;
// //c)Add amazon at end

// const comp=["Bloomberg","microsoft","uber","google ","ibm","netflix"]
// console.log(comp)
// comp.shift();
// console.log(comp);
// comp.splice(1,1,"ola")
// console.log(comp);
// const newComp = ["Amazon"]
// const Add = comp.concat(newComp);
// console.log(Add);


// ////////////function\
// /////sum////////////
// function sum2(){
//     var a=2; 
//     var b=3;
//     console.log("sum = " + (a + b));}
//     sum2();

//     ////sum ARROW FUNCTION
//     const sum3 =(a,b)=>{
      
//         console.log("sum="+ (a+b));

//     }
//     sum3(2,3);

//     ////parametric sum
//     function sumpara(a,b){
//         console.log("sum="+(a+b));
//     }
//     sumpara(2,3);

//     ///////function mutilple
//     function mult2(){
//         var a=2; 
//         var b=3;
//         console.log("mult = " + (a * b));
//     }
//         mult2();

//         /////////Multiple ARROW FUNCTION
//     const aMult =(a,b)=>{
      
//         console.log("aMult="+ (a*b));

//     }
//     aMult(3,3);

//      ////parametric Mult
//      function pMult(a,b){
//         console.log("Mult="+(a+b));
//     }
//     pMult(2,3);




//     ////////
//     ///////////write a function with "function keyword and print vowwles and number of vowels

       
   
//        function show(str){
//         let count=0;

//         for(let char of str){
//             if(char=='a'||char=='e' ||char=='i' ||char=='o' ||char=='u' ){
//                 count++;
//             }
//         }
//         console.log(count+char);
//        }



// const show2 = (str)=>{
//     let count=0;
//     for(let char of str){
//         if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
//             count++;
//         }

//     }
//      console.log(count+char);
// }

// ////////for each///foe given val;ue print foreach()////
// const arr = [1,2,3,4,5,6]
//      arr.forEach((num)=>{
//      console.log(num*num);
//  })

// ////////map
//  let Array=['a','b','c','d','e','f'];
//   Array.map((char)=>{
//     return console.log(char);
//   })

// ///////////filter
//   let Array2=[10,20,30,40,50];
//   Array2.filter((num)=>{
//     return console.log(num%2===0);
//   })
// ////reduce /////

// let Array3 = [1,2,3,4]
// Array3.reduce((res,curr)=>{
//    return (output = res+curr);
// })
//  console.log(output)

// ////////mark>90 fuilter them
// let num1 = [20,93,40,95,60]
// let topper = num1.filter((num)=>{
//        return num >90;
// }) 
// console.log(topper);


// ////////////////print array ////////////

// // let num = prompt("enter num:");
// // let Arr=[];
// // for(let i=0; i<=num; i++){
// //     Arr[i-1]=i;
// // }
// // console.log(Arr);

// // ////////sum
// // let Sum = Arr.reduce((res,curr)=>{
// //  return (res+curr)  })

// // console.log(Sum);
// // ///////prod
// // let Prod = Arr.reduce((res,curr)=>{
// //     return (res*curr)  })
   
// //    console.log(Prod);



// /////////DOM//////////////

// // let save2= document.querySelector(".txt");
// // console.log(save2);

// // // save2.innerHTML='heelo';
// // // save2.style.color='red';


// // ///////////////////create h2 heading element for text and change text through javascript
// // let save = document.getElementsByClassName("txt");
// // save.innerText ="i am sami";
// // console.log(save);


// // ////////make three divs with same class & some unique text:

// // let txt = document.querySelectorAll(".box");
// // console.log(txt);
// // txt[0].innerText="heelo";
// // txt[1].innerHTML="heelo2";
// // txt[2].innerText="heelo3";



// ///Q1////create a button that change color of text
//  let Btn= document.createElement("button");
//  Btn.style.backgroundColor='red';
//  Btn.innerText='Click me';
//  Btn.style.color='white';
//  Btn.style.height='50px';
//  Btn.style.width='100px';
//  Btn.style.border='none';
//  ///ADD BUTTYON IN BODY
//  document.querySelector("body").prepend(Btn);

// //Q2/// add class in html and also in javascript and then add them 
// /////????????????????


// //////////////////change color through event handling
// // let btn2 = document.querySelector('#btn2');
// // btn2.style.color='red';
// // btn2.style.border='none';
// // btn2.style.width='100px';
// // btn2.style.height='50px';
// // console.log(btn2);
// // let chColor = document.querySelector('.text');
// // console.log(chColor);
// // btn2.addEventListener('click',()=>{
// //  if(chColor.style.color!='red'){
// //     chColor.style.color='red';}
// //     else{
// //     chColor.style.color='blue';

// //     }
// // })


// ///////// write a code to chnage dark and white mood of screen on click

// let btn3 = document.getElementsByClassName("btn3")[0];
// console.log(btn3)
// btn3.style.color = 'red';
// btn3.style.border = 'none';
// btn3.style.width = '100px';
// btn3.style.height = '50px';
// let body = document.querySelector("body");
// const Mode = () => {
//     if(body.style.backgroundColor!="black"){
//         body.style.backgroundColor="black";
//     }else{
//         body.style.backgroundColor="white";
//     }
// }
// btn3.addEventListener("click",Mode);





//////api fetching data

let url="https://cat-fact.herokuapp.com/facts";





 const getData =async()=>{
        let response = await fetch(url);
        console.log(response);
        let data = await response.json();
        console.log("printing data into json");
        console.log(data[0].text);
           text.innerText=data[0].text;
 }

const text=document.querySelector(".text");
 

//////////////












