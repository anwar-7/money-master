/* 
// input field value
const inputIncome = document.getElementById('input-income');
// expenses field value
const inputFoodExpense = document.getElementById('food-expenses');
const inputRentExpense = document.getElementById('rent-expenses');
const inputClothesExpense = document.getElementById('clothes-expenses');
// expenses balance field innerText
const totalExpensesOutput = document.getElementById('expenses-total');
const balanceExpensesOutput = document.getElementById('balance-total');
// saving input field value
const savePercentInput = document.getElementById('saving-percent');
// saving output field innerText
const savePercentOutput = document.getElementById('saving-amount');
const remainingBalanceOutput = document.getElementById('remaining-balance');

// button click field
// calculate-btn
// save-btn
 */

function totalExpenses() {
  const inputFoodExpense = document.getElementById('food-expenses').value;
  const inputRentExpense = document.getElementById('rent-expenses').value;
  const inputClothesExpense = document.getElementById('clothes-expenses').value;
  const totalExpensesSum =
    parseFloat(inputFoodExpense) +
    parseFloat(inputRentExpense) +
    parseFloat(inputClothesExpense);
  if (isNaN(totalExpensesSum) || totalExpensesSum < 0) {
    totalExpensesSum.value = '';
    return alert('Please input valid amount of money in number format');
  } else {
    totalExpensesSum.value = '';
    return totalExpensesSum;
  }
}

function totalBalance() {
  const inputIncome = document.getElementById('input-income').value;
  const balanceAmount = parseFloat(inputIncome) - totalExpenses();
  return balanceAmount;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
  const totalExpensesOutput = document.getElementById('expenses-total');
  totalExpensesOutput.innerText = totalExpenses();
  const balanceExpensesOutput = document.getElementById('balance-total');
  balanceExpensesOutput.innerText = totalBalance();
});
