type User  = {
    readonly _id : string, //READONLY CANNOT UPDATE LATE
    name: string,
    email: string,
    isActive: boolean,
    creditCardNumber?: number,  //OPtional 
}

let newUser:User = {
    _id : "21321",
    name :"Hassaan",
    email : "Hassaan@gmail",
    isActive : false,
}
// newUser._id = 12321; //Not Allowed


type cardNumber = {
    cardNumber : string;
}
type cardData = {
    cardData: string;
}
//this will get both the values addition with the "cvv"
type cardDetails = cardNumber & cardData &{
    cvv : number
}
export {}