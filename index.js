


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


while (true) {
    let userLogin=prompt('Enter your Username:');
    let pinLogin=prompt('Enter your Private Password:');
    for(obj of accounts){
        if (userLogin === obj.username){
            if(pinLogin === obj.pin) {
                alert("Welcome back!");

                //MENU CICLE
                while (true) {                
                    const inputMenu = prompt(' 1. Withdrawal \n 2. Deposit \n 3. CheckBalance \n 4. History ')

                    //WITHDRAWAL
                    if (inputMenu == 1) {
                        let amount = prompt('How much you want Withdrawal?');
                        if (amount <= obj.balance && amount>0 ) {
                            obj.balance-=amount;
                            alert('Operation confirmed, good joob champ!');
                            let operation= {
                                type: "withdrawal",
                                cash: amount,
                                date : new Date().toLocaleString("it-IT", { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })                           
                            }
                            obj.movements.push(operation);
                        }else{
                            alert('Try again furbacchione!')
                        }
                        
                    //DEPOSIT      
                    } else if(inputMenu == 2 ){
                        let bankPayment = parseInt(prompt('Enter how much you want add in your Balance:'));
                        if (bankPayment > 0  ) {
                            obj.balance += bankPayment;
                            alert(`Balance Update : £ ${obj.balance.toFixed(2)} `);
                            let operation= {
                                type: "payment",
                                cash: bankPayment,
                                date: new Date().toLocaleString("it-IT", { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'})                          
                            }
                            obj.movements.push(operation);                                                        
                        }

                    //CHECK BALANCE 
                    } else if(inputMenu == 3){
                        alert(`Balance: £ ${obj.balance.toFixed(2)} `);
                        

                    //MOVEMENTS HISTORY    
                    } else if (inputMenu == 4){
                        alertString = ""
                        for (operation of obj.movements) {
                            newString = `${obj.movements.indexOf(operation) + 1}) TYPE: £ ${operation.type} | AMOUNT: ${operation.cash} | DATE: ${operation.date}\n`   
                            alertString += newString
                        }
                        alert(alertString)
                        // fin quando non viene fatto il ciclo , non stamperà nessun movimento salvato


                    //ESC
                    } else if (inputMenu.toUpperCase() == "ESC") {
                        alert(`See you soon, \"${obj.username}\"`)
                        break;

                    } else {
                        alert("Menu input not valid!")
                    }
                }

                break

            } else {
                alert('fail... try again loser!')
                break;
            } 
        }
        if(accounts.indexOf(obj) == accounts.length-1){
            alert('fail... try again loser!')
        }
    }
}



