// restrict user choice 
// delievry status is example of enum in ecommerce website 

const enum seatChoice {
    AISLE = 10, //If e dont choose by defaukt it is 0
    MIDDLE = 22,
    WINDOW , //this will automatically 23 
    FORTH=17
}

const seat = seatChoice.FORTH

const enum seatChoice2 {
    AISLE = "aisle", //this have this value 
    MIDDLE= 10 , //and the others have the value onward to 10 
    WINDOW,
    FORTH
}
const seat2 = seatChoice2.FORTH

//using const generate less Javascript code 

export{}
