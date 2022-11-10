'use strict';
import * as config from './config.js';
import * as model from './model.js';

import taxViews from './Views/taxViews.js';

const form = document.querySelector('.form');
const btnGrossIncome = document.querySelector('.form__btn--gross-income');
const inputGrossIncome = document.querySelector('.form__input--gross-income');

// const GROSS_SALARY = 50197; // First bracket
// const GROSS_SALARY = 98850; // second bracket
// const GROSS_SALARY = 120000; // second + third bracket
// const GROSS_SALARY = 180000; // second + third + fourth bracket
// const GROSS_SALARY = 221709; // second + third + fourth + fifth bracket

// EVENT LISTENERS

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   console.log(+inputGrossIncome.value);
//   takeHomeIncome(+inputGrossIncome.value);
// });

// btnGrossIncome.addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log(+inputGrossIncome.value);
//   takeHomeIncome(+inputGrossIncome.value);
// });

const controlTax = function () {
  // 1) Get salary
  const salary = taxViews.getSalary();
  console.log('controller - Salary:', salary);

  // 2) Calculate the Tax in Model
  // const fedralTax =
  model.calculateTax(salary);

  taxViews.render(model.tax);
};

const init = function () {
  taxViews.addHandlerRender(controlTax);
};

init();
