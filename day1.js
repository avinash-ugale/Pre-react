// console.log("hello from");

// var a=10;
// console.log(a);

// let b=10;
// console.log(b);

// {
//     var c=20;
//     console.log(c);
//     let d=30;
//     console.log(d);
// }

// console.log(c);
// console.log(d);   
//we can not declared let outside the block .
//we have to first initialized in let .let a=10 log().

// const f=10;
// console.log(f);
// // f=20;
// // console.log(f);  //error 

// const myArr={
//     name:"Avi",
// };
//  myArr.name="Lokesh";
// //  myArr={
// //      name:"Ajinkya";
// //  };
//  console.log(myArr);


//===========String=========//
// let myString1="abcd@gmail.com";
// let myString2="ABCD@gmail.com";

// console.log(myString1.toUpperCase()===myString2.toUpperCase());

// for(let i=0;i<myString1.length;i++)
// {
//     console.log(myString1[i]);
// }

//=========WAP to find repeated character======//

// let input="AVVIINASH";
// let output="";
//  for(let i=0;i<input.length;i++)
//  {
//         let count=0;
//         for(let j = 0; j <= input.length; j++) {
//         if(input[i] === input[j]){
//             if(j<i){
//                 break;
//             }
//         count++;
//         if(count>1){
//           output=output+input[i];
//           break;
//         }
             
//          }
//         }
//      }
//      console.log(output);
     
//====Array====/

// let myArr=[1,2,3,4,5]
// let myArr1=[1,2,3,4,5]

// let isSame=true;

// for(let i=0;i<myArr1.length;i++)
// {
//     if(myArr[i]!==myArr1[i])
//     {
//     isSame=false;
//     break;
// }
// }
// console.log(isSame);

//========input="we are fine"==[output="ew era enif"

// let String1="we are fine";
// let String2="";
// function reverseString(value)
// {
//     let returnValue="";
//     for(let i=value.length-1;i>-1;i--)
//     {
//         returnValue=returnValue + value[i];
//     }
//     return returnValue;
//     }

// let wordString="";

// for(let i=0;i<String1.length;i++)
// {
//    if(String1[i] === " "){

//     String2=String2+reverseString(wordString)+ " ";
//       console.log(wordString);
//       wordString="";
//       continue;
//    }
//    else{
//        wordString=wordString+String1[i];
//        if(i+1===String1.length)
//        {
//         String2=String2+reverseString(wordString);
//        console.log(wordString);
//        wordString="";
//       }
//    }
   
// }
// console.log(String2);


