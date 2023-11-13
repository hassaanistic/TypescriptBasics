let greetings: string = "Hello Hassaan"
greetings.toLocaleLowerCase(); //we get the methods suggestions of the string
console.log(greetings)

//number
let userID  : number= 334455;

//boolean
let isLoggedIn : boolean = false;

//any ->it turn off the typeChecking 
let hero:string ;
function getHero () {
return "thor";
}
hero = getHero(); //"Bydefault" let hero: any


export{} //this tempraroly remove the code error Of swigly lines