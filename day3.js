//=====deep copy======//

/* const myArr = [1,2,3,4,5];
const myArrNew = [];
for(let i= 0; i<myArr.length;i++){
    myArrNew.push(myArr[i]);
}
console.log(myArr); [1, 2, 3, 4, 5]
console.log(myArrNew);
myArr.push(7);
console.log(myArr); 
console.log(myArrNew); */


//=====spread opeartor======//

/* const myArr = [1,2,3,4,5];
const myArrNew = [...myArr];
console.log(...myArr);
console.log(myArr); [1, 2, 3, 4, 5]
console.log(myArrNew);
myArr.push(7);
console.log(myArr); 
console.log(myArrNew); */

/* const myObject ={
    name:"avinash",
    age:29,
}

const myNewObject ={ ...myObject};
console.log(myObject);
console.log(myNewObject);
myObject.name="Avi";
console.log(myObject);
console.log(myNewObject); 

// console.log(...myObject); not valid   */


//******Rest*****//

function addNumbers(...args)
{
    //const args =[10,20,30,40]; internally
     let result =0;
     for(let i=0;i<args.length;i++)
     {
         result +=args[i]; //same as result =result +args[i]
     }
      return result;
}
console.log(addNumbers(10,20,30,40));