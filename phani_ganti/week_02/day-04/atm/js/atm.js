$(document).ready(function(){
// Keep track of the checking and savings balances somewhere
var savingsAccBalance = +$('#savings-balance').text().slice(1);
var checkingAccBalance = +$('#checking-balance').text().slice(1);
var overDraftUsage = savingsAccBalance + checkingAccBalance;


// Add functionality so that a user can deposit money into one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page so a
    //user can see the change.

$('#checking-deposit').on('click', function(){
  var checkings = +$('#checking-balance').text().slice(1);
  // var checkings = checkingAccBalance;
  var checkingAmount = +$('#checking-amount').val();
  $('#checking-balance').text('$'+(checkingAmount + checkings));
});

$('#savings-deposit').on('click', function(){
  var savings = +$('#savings-balance').text().slice(1);
  // var savings = savingsAccBalance;
  var savingsAmount = +$('#savings-amount').val();
  $('#savings-balance').text('$'+(savingsAmount + savings));
});


// Add functionality so that a user can withdraw money from one of the bank accounts.
// Make sure you are updating the display and manipulating the HTML of the page
//so a user can see the change.
// Make sure the balance in an account can't go negative.
//If a user tries to withdraw more money than exists in the account, ignore the transaction.

var balanceCheck = function(){
  var balance = +$('#checking-balance').text().slice(1);
  return balance;
};

var balanceSavings = function(){
  var balance = +$('#savings-balance').text().slice(1);
  return balance;
};



$('#checking-withdraw').on('click', function(){
  var checkings = balanceCheck();
  var checkingAmount = +$('#checking-amount').val();
  if((checkings >= checkingAmount)){
    var balanceCheckings = checkings - checkingAmount;
    $('#checking-balance').text('$'+balanceCheckings);
    if(balanceCheck()===0){
      $('#checking-balance').css({"background-color": "red"});
    }
    if(balanceCheck()>0){
      $('#checking-balance').css({"background-color": "#E3E3E3"});
    }

  }

  // if((checkings < checkingAmount) && (checkingAmount <= overDraftUsage)){
  //   myChkBalance = (checkingAmount - checkings);
  //   var savingsbalanceLeft = overDraftUsage - checkingAmount;
  //   $('#checking-balance').text('$'+myChkBalance);
  //   $('#savings-balance').text('$'+balanceLeft);
  // }

  else{
    $('#checking-balance').text('$'+(checkings));
  }
});

$('#savings-withdraw').on('click', function(){
  var savings = balanceSavings();
  var savingsAmount = +$('#savings-amount').val();
  if(savings >= savingsAmount){
    var savingsBalance = savings - savingsAmount;
    $('#savings-balance').text('$'+savingsBalance);

    if(balanceSavings()===0){
      //$(this).parent('.account').css({"background-color": "red"});
      $('#savings-balance').css({"background-color": "red"});
    }
    if(balanceSavings()>0){
      // $(this).parent('.account').css({"background-color": "#6C9A74"});
      $('#savings-balance').css({"background-color": "#E3E3E3"});
    }
  }
  else{
    $('#savings-balance').text('$'+(savings));
  }
});




// When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.
// What happens when the user wants to withdraw more money from the checking account
// than is in the account? These accounts have overdraft protection,
// so if a withdrawal can be covered by the balances in both accounts,
// take the checking balance down to $0 and take the rest of the withdrawal
// from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// Make sure there is overdraft protection going both ways.
// Are there ways to refactor your code to make it DRYer?

});
