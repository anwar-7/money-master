/*
// button click field
// calculate-btn
// save-btn
 */
// foo expenses function
function foodExpense() {
  const inputFoodExpense = document.getElementById('food-expenses');
  const foodCost = parseFloat(inputFoodExpense.value);
  if (isNaN(foodCost) || foodCost < 0) {
    // return alert('Please input valid amount of money in number format');
  }
  return foodCost;
}

// return expenses function
function rentExpense() {
  const inputRentExpense = document.getElementById('rent-expenses');
  const rentCost = parseFloat(inputRentExpense.value);
  if (isNaN(rentCost) || rentCost < 0) {
    // return alert('Please input valid amount of money in number format');
  }
  return rentCost;
}

// clothes expenses function
function clothesExpense() {
  const inputClothesExpense = document.getElementById('clothes-expenses');
  const clothesCost = parseFloat(inputClothesExpense.value);
  // if (isNaN(clothesCost) || clothesCost < 0) {
  //   // return alert('Please input valid amount of money in number format');
  // }
  return clothesCost;
}

// income input function
function income() {
  const inputIncome = document.getElementById('input-income');
  const income = parseFloat(inputIncome.value);
  return income;
}

// total expenses function
function totalExpenses() {
  const totalExpensesSum = foodExpense() + rentExpense() + clothesExpense();
  return totalExpensesSum;
}

// balance function
function totalBalance() {
  const balanceAmount = income() - totalExpenses();
  return balanceAmount;
}

// clicked hear expenses
document
  .getElementById('calculate-btn')
  .addEventListener('click', function (event) {
    // event.preventDefault();
    const totalExpensesOutput = document.getElementById('expenses-total');
    totalExpensesOutput.innerText = totalExpenses();
    const balanceExpensesOutput = document.getElementById('balance-total');
    balanceExpensesOutput.innerText = totalBalance();
  });

// clicked hear saving
document.getElementById('save-btn').addEventListener('click', function (event) {
  const savingPercent = document.getElementById('saving-percent').value;
  const saving = (income() * parseFloat(savingPercent)) / 100;

  // saving amount show
  const savingAmount = document.getElementById('saving-amount');
  savingAmount.innerText = saving;

  // remaining balance show
  const remainingBalance = document.getElementById('remaining-balance');
  remainingBalance.innerText = totalBalance() - saving;
});

function
