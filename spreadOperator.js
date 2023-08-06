/**
 * Author: Md Sholayman
 * Date : 6 August,2023
 * (...) is the sign of spread operator.we can  use this in both array and object
 * Some of the examples of how should we use spread syntax.
 */


//spread an array into another array
//In this example, we use spread syntax to combine two arrays(arr1 and arr2) into a new array called output.

let arr1 = [1,2,3] ;
let arr2 = [4,5,6] ;

let output =[...arr1,...arr2];
// console.log(output);



//pass spread syntax as arguments to a function
// In this example, we use spread syntax to pass an array of numbers as individual arguments to the sum function.
function sum(a,b,c) {
  return a+b+c  
}

let numbers = [1,2,3,5,6,7]
// console.log(sum(...numbers));




//copy or clone an array
// In this example, we use spread syntax to create a copy of an existing array(originalArray).

const num = [1,2,3,4,5]
const newArr = [...num]
// console.log(newArr);


// Combine objects
// In this example, we use spread syntax to combine two objects(obj1 and obj2)
// into a new object called combinedObject.


const obj1 = {a:1 , b:1} ;
const obj2 = {c:3 , d:4} ;
const combinedObj = {...obj1,...obj2}
// console.log(combinedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }



/* 
* Spread syntax can be used in many other ways as well, such as to create a new array with additional 
  elements or to spread elements into a function call. It is a powerful and versatile feature in JavaScript 
  that can help simplify your code and make it more readable.
*/


//merge object

// In this example, we use spread syntax to merge two objects(obj1 and obj2) into a new object called mergedObject.
//When there are duplicate keys, the value of the last key in the spread list will override previous values.



const ob3 ={a:1 , b:3} ;
const ob4 = {b:2 , c:4} ;
// const ob1 ={a:1 , b:2} ;
// const ob2 = {b:3 , c:4} ;

//const mergeObj ={...ob1,...ob2}; //output { a: 1, b: 3, c: 4 }
 const mergeObj ={...ob3,...ob4}; //output  { a: 1, b: 2, c: 4 }
// console.log(mergeObj);

//if there is a common key it will always take the last one just like the key with value 3 from the ob2
//not the key with value 2 from the ob1..It doesn't matter which value is higher.


//create a new array with additional arguments

//In this example we had an array called ar1. by this we created a new array called ar2 by coping ar1 and we used 
//spread syntax for this and it didn't changed anything in first array but we got a new array.


const ar1 = ["a" , "s" , "m"]
const ar2 = [...ar1 , 2,3] ;

// console.log(ar2); // output : [ 'a', 's', 'm', 2, 3 ]



//clone or copy an object

//In this example we created a new obj called cloneObj by cloning or copying a object called letter by simply cloning 
// or copying it by spread syntax(...) 

const letter = {a:"s" , b:"k" , c:"l"};
const cloneObj = {...letter} ;
// console.log(cloneObj); //output: { a: 's', b: 'k', c: 'l' }


//Rest parameter

//In this example we have shown how we can send any number of parameter by using spread syntax.

function restParam(...numbers){

  return numbers.filter(num => num !==4)
}

// console.log(restParam(1,2,3)) ; //output: [ 1, 2, 3 ]
// console.log(restParam(1,2,3,4,5)) ; //output: [ 1, 2, 3, 5 ]
// console.log(restParam(1,2,3,4,5,6,7)) ; //output: [ 1, 2, 3, 5 ]


// Combine fixed and variable parameters.
//In this example we use two fixed variable and a rest parameter to add some of the numbers.

function add(a,b,...rest){
  // return a+b+rest[3]
  return a+b+rest[0] //output: 53
}

// console.log(add(1,2 ,3,4,5,6,7,8,9)) ; //output: 9
// console.log(add(1,2,50,60,70)) ; //output: 53

// Ignore some parameters

function message(prefix,...mess){
  console.log(`${prefix} ${mess.join(", ")}`)
}

// message("first msg , second msg") //output: first msg , second msg 
message("error") //output:error  ,here we ignored rest param.