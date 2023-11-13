//instead of never we should use Union
//  this is called pipe "|"
var score = 33;
score = 44;
score = "54";
var hassaan = { name: "Hassaan", id: 1 };
hassaan = { username: "Hassaan", id: 1 }; //as admin
// function getDbId(id: number | string) {
//     console.log(`Db ID is ${id}`);
// }
// getDbId(3);
// getDbId("3");
function getDbId(id) {
    // id.toUpperCase(); // This is doing error TS is not getting it seoarate it is getting it A combined dataType  
    if (typeof id === "string") {
        id.toUpperCase();
    }
}
var data = [1, 2, 3, 4];
var data2 = ["1", "2", '3', "4"];
var data3 = [1, 3, 4]; //either all "nums" or all "str"
var data4 = [1, "3", false, true, "anyStr"]; // Any num array 
var data5 = [1, "3", false, true, "anyStr"]; // Any num array 
data5.forEach(function (element) {
    console.log(element);
});
