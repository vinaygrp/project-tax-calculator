'use strict';
import * as model from './model.js';

import calcTaxViews from './views/calcTaxView.js';
import calcTaxSummaryViews from './views/calcTaxSummaryView.js';
import federalSummaryView from './views/federalSummaryView.js';
import provisionalSummaryView from './views/provisionalSummaryView.js';

const controlTax = function () {
  // 1) Get salary
  const salary = calcTaxViews.getSalary();
  // console.log('controller - Salary:', salary);

  if (!salary) {
    calcTaxViews.renderError('Empty Salary');
    return console.error('Empty Salary');
  }

  if (salary < 0) {
    calcTaxViews.renderError('Enter Positive Salary');
    return console.error('Enter Positive Salary');
  }

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
