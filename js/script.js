// foo expenses function
function foodExpense() {
  const inputFoodExpense = document.getElementById('food-expenses');
  const foodCost = parseFloat(inputFoodExpense.value);
  return foodCost;
}

// return expenses function
function rentExpense() {
  const inputRentExpense = document.getElementById('rent-expenses');
  const rentCost = parseFloat(inputRentExpense.value);
  return rentCost;
}

// clothes expenses function
function clothesExpense() {
  const inputClothesExpense = document.getElementById('clothes-expenses');
  const clothesCost = parseFloat(inputClothesExpense.value);
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
document.getElementById('calculate-btn').addEventListener('click', function () {
  calculateError();
});

// clicked hear saving
document.getElementById('save-btn').addEventListener('click', function () {
  saveError();
});

// calculate error function
function calculateError() {
  let totalCost = totalExpenses();
  let income = document.getElementById('input-income').value;
  let totalIncome = parseFloat(income);
  let foodExpense = document.getElementById('food-expenses').value;
  let rentExpense = document.getElementById('rent-expenses').value;
  let clothesExpense = document.getElementById('clothes-expenses').value;

  if (income == '' || income == null || income < 0) {
    alert('Please Input Number Value and Positive Value!');
    return false;
  } else if (foodExpense == '' || foodExpense == null || foodExpense < 0) {
    alert('Please Input Number Value and Positive Value!');
    return false;
  } else if (rentExpense == '' || rentExpense == null || rentExpense < 0) {
    alert('Please Input Number Value and Positive Value!');
    return false;
  } else if (
    clothesExpense == '' ||
    clothesExpense == null ||
    clothesExpense < 0
  ) {
    alert('Please Input Number Value and Positive Value!');
    return false;
  } else if (totalIncome < totalCost) {
    alert('Total Expense Can Not Be Greater Than Total Income');
  } else {
    const totalExpensesOutput = document.getElementById('expenses-total');
    totalExpensesOutput.innerText = totalExpenses();
    const balanceExpensesOutput = document.getElementById('balance-total');
    balanceExpensesOutput.innerText = totalBalance();
  }
}

// saving error function
function saveError() {
  let incomeInfo = document.getElementById('input-income').value;
  let balanceInfo = document.getElementById('balance-total').innerText;
  let balance = totalBalance();
  let saveAmount = document.getElementById('saving-percent').value;
  let totalSaveAmount = parseFloat(saveAmount);

  if (incomeInfo == '') {
    alert('Income can not be empty');
    return false;
  }
  if (balanceInfo == 0) {
    alert('Balance is empty');
    return false;
  }
  if (saveAmount == '' || saveAmount == null || saveAmount < 0) {
    alert('Please Input Number Value and Positive Value!');
    return false;
  } else if (balance < totalSaveAmount) {
    alert('Total Saving Can Not Be Greater Than Total Balance');
  } else {
    const savingPercent = document.getElementById('saving-percent').value;
    const saving = (income() * parseFloat(savingPercent)) / 100;
    // saving amount show
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = saving;
    // remaining balance show
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = balance - saving;
  }
}
