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
document.getElementById('save-btn').addEventListener('click', function (event) {
  saveError();
});

function calculateError() {
  let totalCost = totalExpenses();
  let income = document.getElementById('input-income').value;
  let totalIncome = parseFloat(income);
  let foodExpense = document.getElementById('food-expenses').value;
  let rentExpense = document.getElementById('rent-expenses').value;
  let clothesExpense = document.getElementById('clothes-expenses').value;

  if (income == '' || income == null) {
    alert('please input nambar valu');
    return false;
  } else if (foodExpense == '' || foodExpense == null) {
    alert('please input nambar valu');
    return false;
  } else if (rentExpense == '' || rentExpense == null) {
    alert('please input nambar valu');
    return false;
  } else if (clothesExpense == '' || clothesExpense == null) {
    alert('please input nambar valu');
    return false;
  } else if (totalIncome < totalCost) {
    alert('total cost can not be greater than total income');
  } else {
    const totalExpensesOutput = document.getElementById('expenses-total');
    totalExpensesOutput.innerText = totalExpenses();
    const balanceExpensesOutput = document.getElementById('balance-total');
    balanceExpensesOutput.innerText = totalBalance();
  }
}

function saveError() {
  let balance = totalBalance();
  let saveAmount = document.getElementById('saving-percent').value;
  let totalSaveAmount = parseFloat(saveAmount);

  if (saveAmount == '' || saveAmount == null) {
    alert('please input nambar valu');
    return false;
  } else if (balance < totalSaveAmount) {
    alert('total saving can not be greater than total Balance');
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
