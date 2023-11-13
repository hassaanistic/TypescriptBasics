//It has most similarities with the TYPE  ALIAS
// it is like a class   
//loose form of class 
interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial : ()=> string,
    startTrial(): string,
    // getCoupons : (couponName : string) => number
    getCoupons(couponName: string, value: number): number
}

//Reopening of interface
interface User{
    gitHubToken : string,

}

const Hassaan: User = {
    gitHubToken: "TokenABC",
    dbId: 32121,
    email: "Hassaan@gmail.com",
    userId: 2323,
    startTrial: () => {
        return "HelloHassaan"
    },
    getCoupons(anyName: "hassaan", value: 1221) {
        return 2132;
    }
}


//Inherting the User Interface


interface Admin extends User{
    role :"admin" | "ta" | "learner",

}

const HassaanAdmin: Admin = {
    role: "admin",
    gitHubToken: "TokenABC",
    dbId: 32121,
    email: "Hassaan@gmail.com",
    userId: 2323,
    startTrial: () => {
        return "HelloHassaan"
    },
    getCoupons(anyName: "hassaan", value: 1221) {
        return 2132;
    }
}


//Differ between type aliases and Interfsce
//we cannot reopen the type 
//we extend Type with using "&" and here we use keyworkd "Extend"

export {}