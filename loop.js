/*
 * Author:Md Sholayman
 * Date:6 August,2023
 * Des: Examples of different kind of loop.
 */
"use strict"

//simple for loop

let sum = 1;
for(let i=1 ; i<11 ; i++){
     sum = sum + i;
    // console.log(sum);
}

//simple for of loop

let letters =['a','b','c','d','e']

for(let letter of letters){
    // console.log(letter);
}

//simple for in loop

const author ={
    name: "sholayman" , age:24 , prof : "student" , passion : "programming"
}

for (let props in author){
    // console.log(props); ----> get the attribute
    // console.log(author[props]); ===> get the value of attribute
    //  console.log(props+":"+author[props]);  ===>both value and att
}

