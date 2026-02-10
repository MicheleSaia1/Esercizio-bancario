


const accounts =[]
let User1={
    Username:"Baolo",
    Pin: "ciao" ,
    balance: 500,
    Movements: []
}

let User2={
    Username: "BrunoH",
    Pin: "<18 <3"  ,
    balance: 10000  ,
    Movements:[]  
}

accounts.splice(0,0,User1,User2)
console.log(accounts);

let UserLogin=prompt('Enter your Username');
let PinLogin=prompt('Enter your Private Password');


for( let obj of accounts){
    if (UserLogin===obj.Username && PinLogin===obj.Pin) {
        alert("Welcome back hero!");
        
        
       
    }else{
        alert('fail... try again loser!')
    }
    
    
    
}


