function addTwo(num : number) : number {
    //we dont need to check like     ->>  if(num == number ){Dothis} etc
    return num + 2;
}
addTwo(5);

function getUpper(val :string) : string {
    return val;
}
getUpper("Hello world!");

function signUpUser(name :string , email: string, isPaid : boolean ) {}
signUpUser('hassaan' , "hassaan@gmail.com" , false);

function loginUser(name :string , email: string, isPaid : boolean ) {}
loginUser('hassaan' , "hassaan@gmail.com" , true);



//MAping
const heros = ["hassaan", "Irfan", "abc"]
// const heros = [1,2,3]
heros.map(hero => {return `her is ${hero}`}) //in this Ts auto detect the hero type in map
heros.map((hero):string => {return `her is ${hero}`}) 



// Handle the Error , void || never
function consoleFunction(errmsg : string):void{
    console.log(errmsg);
}
function handleFunction(errmsg : string):never{
    throw new Error(errmsg);
}

export{}