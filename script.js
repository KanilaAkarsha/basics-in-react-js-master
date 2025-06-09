var userEmail = "kanilasaman1@gmail.com";
const userName = "Kanila Akarsha";//string
let userAge = 22; //number
const isAuthenticated = false; //boolean
const lastName = null; //null
const firstName = undefined; //undefined
const userData = {
    firstName : "Kanila",
    lastName : "Akarsha",
    userAge : 23
};//object
const fruits =["banana","apple","guava"]; //array
const number = [1,2,3,4,5];
const users = [
    {id: 1,name:"kanila"},
    {id: 2,name:"Akarsha"}
];

userAge = 23;

console.log("I'M first javascript file here",{userEmail,userName,userAge});
console.log(userAge,typeof userAge)
console.log("value",isAuthenticated,"type: ",typeof isAuthenticated)
console.log(lastName,typeof lastName)
console.log(firstName,typeof firstName)
console.log(userData,typeof userData)
console.log(fruits,typeof fruits)
console.log(users,typeof users)