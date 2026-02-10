


const accounts =[]
let user1={
    username:"Baolo",
    pin: "ciao",
    balance: 500,
    movements: [],
    // controllo disponibilità fondi 
    Withdrawal: function() {  
       
    }
}

let user2={
    username: "BrunoH",
    pin: "<18 <3",
    balance: 10000,
    movements:[" ciao "]  
}

accounts.splice(0,0,user1,user2)
console.log(accounts);

let userLogin=prompt('Enter your Username:');
let pinLogin=prompt('Enter your Private Password:');
/**
 * @todo inserire il primo ciclo while , che richiede credenziali finchè non combaciano.
 */

for(obj of accounts){
    if (userLogin === obj.username){
        if(pinLogin === obj.pin) {
            alert("Welcome back!");
/** 
 * @todo inserire il secondo ciclo while , richiede di scegliere le opzioni di menù finche l'utente non decide di uscire
 * */   
         
            const inputMenu = prompt(' 1. Withdrawal \n 2. Deposite \n 3. CheckBalance \n 4. History ')
            if (inputMenu == 1) {
                let amount = prompt('How much you want Withdrawal?');
                if (amount <= obj.balance && amount>0 ) {
                    obj.balance-=amount;
                    alert('Operation confirmed, good joob champ !');
                    let operation= {
                        type: "withdrawal",
                        cash: amount,
                        date : new Date()
                    
                    }
                    obj.movements.push(operation);
                }else{
                    alert('Try again furbacchione!')
                }
                




            
            } else if(inputMenu == 2 ){
                let bankPayment = parseInt(prompt('Enter how much you want add in your Balance:'));
                if (bankPayment > 0  ) {
                    obj.balance += bankPayment;
                    alert(`Balance Update : £ ${obj.balance.toFixed(2)} `);
                    let operation= {
                        type: "payment",
                        cash: bankPayment,
                        date : new Date()
                    
                    }
                    obj.movements.push(operation);
                    

                    
                }



            } else if(inputMenu == 3){
                console.log(obj.movements);
                alert(obj.movements)// fin quando non viene fatto il ciclo , non stamperà nessun movimento salvato
            

                

            } else if (inputMenu == 4){

            }
            break;
        } else {
            alert('fail... try again loser!')
            break;
        } 
    }
    if(accounts.indexOf(obj) == accounts.length-1){
        alert('fail... try again loser!')
    }
}




