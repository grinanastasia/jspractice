"use strict";
let money, time;
function start() {
  /* всплывающеее окно на сайте с вопросом */
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}
start();
let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true,
  choseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Ведите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
      if (
        typeof a === "string" &&
        typeof a != null &&
        typeof b != null &&
        a != "" &&
        b != "" &&
        a.length < 50
      ) {
        console.log("done");
        appData.expenses[a] = b;
      } else {
        console.log("bad result");
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на один день составляет " + appData.moneyPerDay + "руб.");
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Мимнимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");
      appData.mouthIncome = (save / 100 / 12) * percent;
      alert("Доход в месяц с вашего депозита: " + appData.mouthIncome);
    }
  },
  chooseOutExpenses: function () {
    for (let i = 0; i < 3; i++) {
      let questionOptExpenses = prompt("Статья необязательных расходов?");
      appData.optionalExpenses[i] = questionOptExpenses;
      console.log(appData.optionalExpenses);
    }
  },
  chooseIncome: function () {
    let items = prompt(
      "Что принесет дополнительный доход? (Перечислите через запятаю)",
      ""
    );
    if (typeof items != "string" || items == "" || typeof items == null) {
      console.log("Ви его ввоведите корректное значение");
    } else {
      appData.income = items.split(", ");
      appData.income.push(prompt("Может что-то еще?"));
      appData.income.sort();
    }
    appData.income.forEach(function (itemmassive, i) {
      alert("Способы доп. заработка: " + (i + 1) + "-" + itemmassive);
    });
  },
};
for (let key in appData) {
  console.log(
    "Наша программа включает в себя данные: " + key + "- " + appData[key]
  );
}
/* let i = 0;
while (i < 2) {
  let a = prompt("Ведите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?", "");
  if (
    typeof a === "string" &&
    typeof a != null &&
    typeof b != null &&
    a != "" &&
    b != "" &&
    a.length < 50
  ) {
    console.log("done");
    appData.expenses[a] = b;
  } else {
    console.log("bad result");
    i--;
  }
  i++;
} */
/* let i = 0;
do {
  let a = prompt("Ведите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?", "");
  if (
    typeof a === "string" &&
    typeof a != null &&
    typeof b != null &&
    a != "" &&
    b != "" &&
    a.length < 50
  ) {
    console.log("done");
    appData.expenses[a] = b;
  } else {
    console.log("bad result");
    i--;
  }
  i++;
} while (i < 2); */
