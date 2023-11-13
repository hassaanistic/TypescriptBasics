// a specialized tyoe of array with some restrictions in TS 

// const user: (string| number)[] = ["hassaan" ,1];
let tUser: [string , number,boolean] 
tUser = ["HA" , 1, true]
// tUser = ["HA" , true, 2] //order is wrong

let rgb : [number , number , number] = [225,123,112]

type tUser=[number , string]

const newUser :tUser = [21,'kasjdl' ] 
newUser[1]= "hassaan"
