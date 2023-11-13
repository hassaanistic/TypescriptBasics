const User = {
    name : "hassaan",
    email : "hassaan@gmail.com",
    isActive : true,
}

function createUser({name: string , isPaid:boolean}){
    
}
// createUser({name:"hassaan",isPaid: false});
let newUser = {name: "Hasaan" , isPaid : true, email: "hassaan@gmail.com"} ; //this email is optional 
createUser(newUser);

function createCourse():{name: string , price:number }{
    return {name: "ReatcTypeScript" , price:99}
}



//Type alias --> Like making user defined dataTypes
{
type User  = {
    name : string,
    email : string,
    isActive : boolean,
}

// type bool = boolean ;
// type MyString = string ;
function makeUser(user : User):User{
    return {name: "", email: ".com", isActive:false}
}
makeUser({name: "Hassaan", email: "Hassaan2gmail.com", isActive:false})

}




export{}