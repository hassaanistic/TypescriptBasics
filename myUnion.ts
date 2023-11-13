//instead of never we should use Union

//  this is called pipe "|"
let score: number | string = 33;

score = 44;
score = "54";

//suppose we are making applicationwith multiple users and admins 
type user = {
    name: string,
    id: number,
}
type admin = {
    username: string,
    id: number,
}


let hassaan: user | admin = { name: "Hassaan", id: 1 }
hassaan = { username: "Hassaan", id: 1 } //as admin

// function getDbId(id: number | string) {
//     console.log(`Db ID is ${id}`);
// }
// getDbId(3);
// getDbId("3");

function getDbId(id: number | string) {
    // id.toUpperCase(); // This is doing error TS is not getting it seoarate it is getting it A combined dataType  
    if(typeof id === "string"){
        id.toUpperCase();
    }
}

const data: number[] = [1,2,3,4];
const data2: string[] = ["1","2",'3',"4"];
const data3: string[] | number[]  = [1,3,4];  //either all "nums" or all "str"
//Not useFull
const data4: (string | number |boolean)[]  = [1,"3",false ,true ,"anyStr"]; // Any num array 
const data5: any[]  = [1,"3",false ,true ,"anyStr"]; // Any num array 

data5.forEach(element => {
    console.log(element);
})

let seatAllotment : "asile" | "middle" | "window" ;  //We make some fixed values 
// seatAllotment = "crew" // Not allowed
seatAllotment = "asile"


export{}