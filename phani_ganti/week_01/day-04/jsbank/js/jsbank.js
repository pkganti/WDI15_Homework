//There is only one bank. This bank has an array of accounts.
var bankAccounts = [{AccountNumber: 10001, Balance: 2000, Owner: 'Phani'},
					{AccountNumber: 10002, Balance: 4000, Owner: 'Edward'},
					{AccountNumber: 10003, Balance: 38000, Owner: 'Jeremy'}]

//This method will return the total sum of money in the accounts
//Takes in bankAccounts object as argument
var sumAmount = function(bankAccounts){
	sum=0;
	for(var i=0; i< bankAccounts.length; i++){
		sum+=bankAccounts[i].Balance;
	}
	return sum;
}

//console.log("The sum of amount is: "+sumAmount(bankAccounts));

//This method will enroll a new account at the bank and add it to the array of accounts.
var addAccount = function(AccNumber, Balance, Owner){
	bankAccounts.push({AccountNumber:AccNumber,
	Balance:Balance, Owner:Owner});
	return bankAccounts;
}

//console.log(addAccount(10008, 3500, 'Bobby'));

// This method takes Account number and Amount as arguments to deposit
//The accounts have a current balance and owner's name.
//You should be able to deposit from an account to change the balance.
var deposit = function(Account,amt){
	listAccounts=[];
	for(var j=0; j<bankAccounts.length; j++){
		listAccounts.push(bankAccounts[j].AccountNumber);
	}
	if(listAccounts.includes(Account))
	{
		if(amt>0){
			for(var i=0; i<bankAccounts.length; i++)
			{
				if(bankAccounts[i].AccountNumber===Account){
					bankAccounts[i].Balance+=amt;
				}
			}

		}
		else{
			console.log("Enter a valid amount");
		}
	}
	else{
		console.log("Account not found");
	}
}
//console.log(deposit(10008, 2000));//This statements deposits 2000$ to the account number
//console.log(deposit(10005, 2000));//This one throws an error as account does not exist

// This method takes Account number and Amount as arguments to withdraw
//The accounts have a current balance and owner's name.
//You should be able to withdraw from an account to change the balance.
var withdraw = function(Account, amt){
	listAccounts=[];
	for(var j=0; j<bankAccounts.length; j++){
		listAccounts.push(bankAccounts[j].AccountNumber);
	}
	if(listAccounts.includes(Account))
	{
		if(amt>0){
			for(var i=0; i<bankAccounts.length; i++)
			{
				if((bankAccounts[i].AccountNumber===Account) && (bankAccounts[i].Balance>amt)){
					bankAccounts[i].Balance-=amt;
				}
                if((bankAccounts[i].AccountNumber===Account) && (bankAccounts[i].Balance<=amt)){
					console.log("You cannot withdraw, insufficient funds");
				}
			}

		}
		else{
			console.log("Please check your amount");
		}

	}
	else{
		console.log("Account not found");
	}
}

//console.log(withdraw(10001, 2000));//This statement throws an error for insufficient funds
//console.log(withdraw(10001, 200));//This one withdraws the amount and displays the balance

//This function transfers the amount from one account to another
var transferAmount = function(fromAc, toAc, amt){
	withdraw(fromAc, amt);
	deposit(toAc, amt);
	console.log("Money transferred");
}
