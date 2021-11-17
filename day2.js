//****Function****//

//>>>>>Normal function>>>>>//

// console.log(addNumbers(10,20));
// console.log(addNumbers);

// function addNumbers(number1,number2)
// {
//     return number1+number2;
// }

//>>>>>function expression>>>>>>//

// const addNumbers2=function (number1,number2)
// {
//     return number1+number2;
// };
// console.log(addNumbers2(10,20));
// console.log(addnumbers2);

// /**** */=====Arrow function`******//

// const addNumbers2=(number1,number2) =>{
//     return number1+number2;
// };

//*******this*******//

/* const myObject ={
    name:"akshay",
    getName:function()
    {const myObject ={
    name:"akshay",
    getName:function()
    {
        return this.name;
    },

};
const myNewObject ={
    name:"ankit",
};

const newGetName =myObject.getName.bind(myNewObject);
console.log(myObject.getName());

console.log(newGetName());

};
const myNewObject ={
    name:"ankit",
};

const newGetName =myObject.getName.bind(myNewObject);
console.log(myObject.getName());

console.log(newGetName()); */

//**********constructor function*************//

/* function Person(name,age)
{
    //check if callled with new keyword
    if(!new.target)
    {
        return new Person(name,age);
    }
this={}//added ineternally
this.name=name;
//return {name};//return(name:age)
//this.number=1234;
this.age=age;
//return1234;//not allowed
//return[1,2,3,4]//alllowed
}
const personObject=new Person("anlu",20);
const personObject1=Person("anlu",20);
console.log(personObject);
console.log(personObject1); */


//=========*******===========//

/* const myArr=[1,2,3,4];
const a =myArr[0];
const b =myArr[1];
const c =myArr[2];
const d =myArr[3];
 
const[a,c,b,d] =myArr;  //sequence is very imp

console.log(a,b,c,d);

const myObject={
    name:"Ankur",
    age:20,
};
const name=myObject.name;
const age=myObject.age;

const {age,name}=myObject;  //sequence is not imp
console.log(name,age); */

//===========*******+================//