/*
* Author: Md Sholayman
* Date : 6 August,2023
* In this page we will know what is class,how to declare it ,how can we use it and constructor of class
*/


//---->Note:: class is a very important thing for object oriented programming.It is highly reusable.
//It holds different kinds of element inside of it and we can use it from anywhere when we need.


//declaring class

class myClass{

    myFun(){
        console.log("Hello! My Name is")
    }
    myFun1(name){
       console.log(name)
    }
    myFun2(){
        console.log("I am ")
    }
    myFun3(age){
        console.log(age)
    }
    myFun4(){
        console.log("years old")
    }
}

//For using it first we have to create a obj of the class

let obj = new myClass ;

//use

obj.myFun();
obj.myFun1("Md Sholayman");
obj.myFun2();
obj.myFun3(24);
obj.myFun4();


/* 
***--->Class Constructor :: It is a method or function of Class.When we create object for class it gets call 
automatic.There is only one constructor for one class.It just works like all the other function.The only
difference between other function and constructor that function can return and it can't.
*/


class aClass{
    constructor(a,b){
    //   console.log("Hello, I am constructor");
    // console.log(a+b); //-->output:: return 30
    this.num1 = a ;  //this means a class variable and we can use it any place inside of this constructor.
    this.num2 = b
    }

    add(){
        console.log(this.num1+this.num2); //output:: 30
    }
}

// new aClass() //constructor getting calls

let obj1 = new aClass(10,20) //sending params to constructor

obj1.add()


//===>::static keyword
//by using this keyword we have direct access from the class.we didn't to create a obj to get element from Class.


class staticClass{
   static myFunc(){
        console.log("Hello from static function.")
    }
}

staticClass.myFunc() //output:: Hello from static function.

//In this example we can see that we didn't create any object and getting access directly from class.


//===>::Class Inheritance
/*
===>Note:: Class inheritance is a relation between parent class and child class.
*/

class parentClass{
   parentFunc(name){
     console.log(`Hello from ${name} function.`);
   }

   //example of override

   parentFunc2(){
    console.log("I am parentFunc2");
   }

   hello1(){
    console.log("Function1 for super keyword");
   }
   hello2(){
    console.log("Function2 for super keyword");
   }

}

class childClass extends parentClass{
    parentFunc2(){
        console.log("I am parentFunc2 but I am getting override");
       }

    //demo for super keyword.We only use it at the time of inheritance.By this we can call function of
    //parent class from child class
    
    superKeyDemo(){
       super.hello1() //output::Function1 for super keyword
       super.hello2() //output:: Function2 for super keyword
    }
}

let childObj = new childClass();
childObj.parentFunc("parent"); //output::Hello from parent function.
childObj.superKeyDemo()

//output of override class methods.

childObj.parentFunc2(); //output::I am parentFunc2 but I am getting override.


//In this example we can see that a function which has been created inside parent Class is getting access 
//by object of child Class.This is called class Inheritance.Child class can also modify an element of parent class
//Which we have seen in parentFunc2.That is called override.