


//simple array declare

let country = ["Bangladesh","India","China","Japan"];

//or

let countryPro = new Array("Bangladesh","India","China","Japan");

// console.log(country,countryPro) // output: [ 'Bangladesh', 'India', 'China', 'Japan' ] [ 'Bangladesh', 'India', 'China', 'Japan' ]

//multiDimensionalArray

const Dhaka = ["Tangail","Gazipur","Munsigonj"];
const Rangpur = ["Dinajpur","Bogra","Ponchogor"];
const Ctg = ["Cox-Bazar","Rangamati","Feni"] ;

const Bangladesh =[Dhaka,Rangpur,Ctg] ; //This is a multiDimensionalArray
// console.log(Bangladesh)  
                             /*
                            *output :   [
                                          [ 'Tangail', 'Gazipur', 'Munsigonj' ],
                                          [ 'Dinajpur', 'Bogra', 'Ponchogor' ], 
                                          ['Cox-Bazar', 'Rangamati', 'Feni' ]  
                                        ]
                            */

 //Now if we want to select Feni by Index
 
 console.log(Bangladesh[2][2])