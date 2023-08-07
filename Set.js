/*
* Author: Md Sholayman
* Date : 6 August,2023
* In this page we will know what is set,how to declare it and some methods of set
*/

/*
*::Note::==>Set is also a collection of data as like as Map.Different between these two is that Set doesn't count
any duplicate values but Map does it.
*/

//declaring a set

let mySet = new Set() ;

// we can also create a collection of data by set in this way.
let mySetBot = new Set(['A','B','C']) 
console.log(mySetBot); //output::Set(3) { 'A', 'B', 'C' }

//adding data to the set

mySet.add("Bangladesh")
mySet.add("India")
mySet.add("Nepal")
mySet.add("Lanka")

console.log(mySet); //output:: Set(4) { 'Bangladesh', 'India', 'Nepal', 'Lanka' }

//Set doesn't count duplicate values
let duplicate = new Set();

duplicate.add("L")
duplicate.add("M")
duplicate.add("M")
duplicate.add("M")
duplicate.add("N")
duplicate.add("O")

console.log(duplicate); //output :: Set(4) { 'L', 'M', 'N', 'O' }


//some methods of the set

let numSet = new Set() ;

numSet.add(1)
numSet.add(2)
numSet.add(3)
numSet.add(4)
numSet.add(5)
numSet.add(6)
numSet.add(7)
numSet.add(8)


//===>This method tells us if there has any data for the given value

if(numSet.has(7)){
    console.log("Yes!!!"); //output:: Yes!!! Because there has a value 7 in the set
}
else{
    console.log("No");
}

//===>This method returns us the values of the set
console.log(numSet.values()); // output::{ 1, 2, 3, 4, 5, 6, 7, 8 }

//===>Set.size method tells us about size of the set

console.log(numSet.size) // output:: 8

//===>Delete a specific set with the given value
numSet.delete(3) // output:: Set(4) { 1, 2, 4, 5 }

//===>This method clears all the collection of the data.
numSet.clear() //output:: Set(0) {}


