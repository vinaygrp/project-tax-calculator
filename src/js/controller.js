'use strict';
import * as model from './model.js';

import calcTaxViews from './views/calcTaxView.js';
import calcTaxSummaryViews from './views/calcTaxSummaryView.js';
import federalSummaryView from './views/federalSummaryView.js';
import provisionalSummaryView from './views/provisionalSummaryView.js';

const controlTax = function () {
  // 1) Get salary
  const salary = calcTaxViews.getSalary();
  console.log('controller - Salary:', salary);

  if (!salary) return console.error('Empty Salary');

  // 2) Calculate the Tax in Model
  // const fedralTax =
  model.calculateTax(salary);

  calcTaxSummaryViews.render(model.tax);

  federalSummaryView.render(model.tax);
  provisionalSummaryView.render(model.tax);
};

const init = function () {
  calcTaxViews.addHandlerRender(controlTax);
};

init();
