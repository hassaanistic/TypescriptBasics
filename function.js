"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    //we dont need to check like     ->>  if(num == number ){Dothis} etc
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val;
}
getUpper("Hello world!");
function signUpUser(name, email, isPaid) { }
signUpUser('hassaan', "hassaan@gmail.com", false);
function loginUser(name, email, isPaid) { }
loginUser('hassaan', "hassaan@gmail.com", true);
//
var heros = ["hassaan", "Irfan", "abc"];
// const heros = [1,2,3]
heros.map(function (hero) { return "her is ".concat(hero); }); //in this Ts auto detect the hero type in map
