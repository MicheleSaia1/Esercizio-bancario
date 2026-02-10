


const accounts =[]
let User1={
    Username:"Baolo",
    Pin: "Guessthe.Game!" ,
    balance: 500,
    Movements: []
}

let User2={
    Username: "BrunoH ",
    Pin: "<18 <3"  ,
    balance: 10000  ,
    Movements:[]  
}

accounts.splice(0,0,User1,User2)
console.log(accounts);

let UserLogin= prompt('Enter your Username');
let PasswordLogin=prompt('Enter your Private Password');


