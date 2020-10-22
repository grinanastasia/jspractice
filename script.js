"use strict";
let money = +prompt(
    "Ваш бюджет на месяц?",
    ""
  ) /* всплывающеее окно на сайте с вопросом */,
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false,
};
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
    consol.log("bad result");
    i--;
  }
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
    consol.log("bad result");
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
    consol.log("bad result");
    i--;
  }
  i++;
} while (i < 2); */
appData.moneyPerDay = appData.budget / 30;
alert("ежедневный бюджет:" + appData.moneyPerDay);
if (appData.moneyPerDay < 100) {
  console.log("Мимнимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}
