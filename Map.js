/*
 * Author:Md Sholayman
 * Date:6 August,2023
 * Des: In this file we have practice Map . How it should declare and different kind of method of Map .
 */


//Declaring a Map

const myMap = new Map()

//setting keys and values in the map

myMap.set("key1","Bangladesh");
myMap.set("key2","India");
myMap.set("key3","Pakisthan");
myMap.set("key4","Maldiv");
myMap.set("key5","Srilanka");
myMap.set("key6","UAE");

//we can get both values and keys from it by running simple for of loop into it and if we loop through the map
// it will return a array of that specific collection.


//looping for the data set
for(x of myMap.values()){
    console.log(x) // returns all the data set with key and value
}

// looping for keys
for(x of myMap.keys()){
    console.log(x) // returns all the keys
}

//different method of Map--->(delete that specific key collection)

myMap.delete("key1") 

for(x of myMap){
//     console.log(x)  // returns all the keys
}

//get method--->(returns the specific value of specific key.)
console.log(myMap.get("key6")) //for key6 returns "UAE".

//has method--->(it tells us if there is any value for that key)
if(myMap.has("key3")){
    // console.log("yes!!!!!");  
}

//clear method

myMap.clear()

for(x of myMap){
    // console.log(x)  // it clears all the data set of the map
}