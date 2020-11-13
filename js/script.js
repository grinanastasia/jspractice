
let startBtn = document.getElementById("start"),
	bugetValue = document.getElementsByClassName("budget-value")[0],
	daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
	levelValue = document.getElementsByClassName("level-value")[0],
	expensesValue = document.getElementsByClassName("expenses-value")[0],
	optionalexpensesValue = document.getElementsByClassName(
		"optionalexpenses-value"
	)[0],
	incomeValue = document.getElementsByClassName("income-value")[0],
	monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
	yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],
	expensesItem = document.getElementsByClassName("expenses-item"),
	expensesBtn = document.getElementsByTagName("button")[0],
	optionalBtn = document.getElementsByTagName("button")[1],
	countBtn = document.getElementsByTagName("button")[2],
	optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
	incomeItem = document.querySelector(".choose-income"),
	checkSavings = document.querySelector("#savings"),
	sumValue = document.querySelector(".choose-sum"),
	percentValue = document.querySelector(".choose-percent"),
	yearValue = document.querySelector(".year-value"),
	monthValue = document.querySelector(".month-value"),
	dayValue = document.querySelector(".day-value");

let money, time;
expensesBtn.disabled = true;
optionalBtn.disabled = true;
countBtn.disabled = true;

startBtn.addEventListener("click", function () {
	/* всплывающеее окно на сайте с вопросом */
	time = prompt("Введите дату в формате YYYY-MM-DD", "");
	money = +prompt("Ваш бюджет на месяц?", "");

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", "");
	}
	appData.budget = money;
	appData.timeData = time;
	bugetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear(); //для работы с датами лучше использовать value, метод для получения года, parse(преобразовывает милисекунды от 1 января 1970 года)
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();
	expensesBtn.disabled = false;
    optionalBtn.disabled = false;
    countBtn.disabled = false;
});

expensesBtn.addEventListener("click", function () {
	let sum = 0;

	for (let i = 0; i < expensesItem.length; i++) {
		//чтобы зависило от количества инпутов
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;
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
			sum += +b;
		} else {
			console.log("bad result");
			i--;
		}
	}
	expensesValue.textContent = sum;
});
optionalBtn.addEventListener("click", function () {
	for (let i = 0; i < optionalExpensesItem.length; i++) {
		let opt = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = opt;
		optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
	}
});
countBtn.addEventListener("click", function () {
	if (appData.budget != undefined) {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		daybudgetValue.textContent = appData.moneyPerDay;
		if (appData.moneyPerDay < 100) {
			levelValue.textContent = "Мимнимальный уровень достатка";
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = "Средний уровень достатка";
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = "Высокий уровень достатка";
		} else {
			levelValue.textContent = "Произошла ошибка";
		}
	} else {
		daybudgetValue.textContent = "Произошла ошибка";
	}
});

incomeItem.addEventListener('input', function () { // можно использовать change, но строки будут появляться после клика за пределы инпута
	let items = incomeItem.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});
checkSavings.addEventListener("click", () => {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', () => {
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', () => {
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
}

//   detectDayBudget: function () {
//     alert("Бюджет на один день составляет " + appData.moneyPerDay + "руб.");
//   },
//   detectLevel: function () {
//     if (appData.moneyPerDay < 100) {
//       console.log("Мимнимальный уровень достатка");
//     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//       console.log("Средний уровень достатка");
//     } else if (appData.moneyPerDay > 2000) {
//       console.log("Высокий уровень достатка");
//     } else {
//       console.log("Произошла ошибка");
//     }
//   },
//   checkSavings: function () {
//     if (appData.savings == true) {
//       let save = +prompt("Какова сумма накоплений?"),
//         percent = +prompt("Под какой процент?");
//       appData.mouthIncome = (save / 100 / 12) * percent;
//       alert("Доход в месяц с вашего депозита: " + appData.mouthIncome);
//     }
//   },
//   chooseOutExpenses: function () {
//     for (let i = 0; i < 3; i++) {
//       let questionOptExpenses = prompt("Статья необязательных расходов?");
//       appData.optionalExpenses[i] = questionOptExpenses;
//       console.log(appData.optionalExpenses);
//     }
//   },
//   chooseIncome: function () {
//     let items = prompt(
//       "Что принесет дополнительный доход? (Перечислите через запятаю)",
//       ""
//     );
//     if (typeof items != "string" || items == "" || typeof items == null) {
//       console.log("Ви его ввоведите корректное значение");
//     } else {
//       appData.income = items.split(", ");
//       appData.income.push(prompt("Может что-то еще?"));
//       appData.income.sort();
//     }
//     appData.income.forEach(function (itemmassive, i) {
//       alert("Способы доп. заработка: " + (i + 1) + "-" + itemmassive);
//     });
//   },
// };
// for (let key in appData) {
//   console.log(
//     "Наша программа включает в себя данные: " + key + "- " + appData[key]
//   );
// }
// let i = 0;
// while (i < 2) {
//   let a = prompt("Ведите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");
//   if (
//     typeof a === "string" &&
//     typeof a != null &&
//     typeof b != null &&
//     a != "" &&
//     b != "" &&
//     a.length < 50
//   ) {
//     console.log("done");
//     appData.expenses[a] = b;
//   } else {
//     console.log("bad result");
//     i--;
//   }
//   i++;
// } */
// let i = 0;
// do {
//   let a = prompt("Ведите обязательную статью расходов в этом месяце", ""),
//     b = prompt("Во сколько обойдется?", "");
//   if (
//     typeof a === "string" &&
//     typeof a != null &&
//     typeof b != null &&
//     a != "" &&
//     b != "" &&
//     a.length < 50
//   ) {
//     console.log("done");
//     appData.expenses[a] = b;
//   } else {
//     console.log("bad result");
//     i--;
//   }
//   i++;