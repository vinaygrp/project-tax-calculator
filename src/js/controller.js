'use strict';
import * as config from './config.js';
import * as model from './model.js';

// const GROSS_SALARY = 50197; // First bracket
const GROSS_SALARY = 98850; // second bracket
// const GROSS_SALARY = 120000; // second + third bracket
// const GROSS_SALARY = 180000; // second + third + fourth bracket
// const GROSS_SALARY = 221709; // second + third + fourth + fifth bracket

const formatNumberInternational = function (num) {
  const options = {
    style: 'currency',
    unit: 'celsius',
    currency: 'CAD',
  };
  return new Intl.NumberFormat('en-CA', options).format(num);
};

/**
 * Calculates the TaxToPay for Fedral and Provincial
 * @param {number} grossSalary
 * @param {Array Object} taxArrayObj
 * @returns {Object Array} taxToPay, taxRateUsed
 */
const calcTax = function (grossSalary, taxArrayObj) {
  let taxableIncome = grossSalary;
  const taxToPay = [];
  const taxRateUsed = [];

  // TAKES THE ARRAY OBJECT OF THE PASSED OJECT AND FILTERS THEM BASED ON THE CONDITION.
  const limits = taxArrayObj.filter((limit) => grossSalary > limit.lower);
  console.log('Limits:', limits);
  limits.forEach((arrObj) => {
    taxableIncome =
      grossSalary > arrObj.upper
        ? arrObj.upper - arrObj.lower
        : grossSalary - arrObj.lower;
    taxToPay.push(taxableIncome * (arrObj.taxRate / 100));
    taxRateUsed.push(arrObj.taxRate);
  });
  console.log(
    'TaxToPay:',
    taxToPay,
    taxToPay.reduce((acc, tax) => acc + tax)
  );

  return { taxToPay, taxRateUsed };
};

/**
 * TAKES IN THE VALUE FROM THE TOP LEVEL SHOWS THE USERS WHAT THEY CAN TAKE HOME.
 */
const takeHomeIncome = function () {
  console.log(
    `Annual Gross Salary CAD${formatNumberInternational(GROSS_SALARY)}`
  );

  //  ======= FEDRAL TAX =======
  const { taxToPay: fedralTaxToPay, taxRateUsed: fedTaxRateUsed } = calcTax(
    GROSS_SALARY,
    config.FEDRAL_TAX
  );
  // console.log(
  //   `fedralTaxToPay: ${fedralTaxToPay}, fedTaxRateUsed: ${fedTaxRateUsed}`
  // );

  // ======= PROVINCIAL TAX.  =======
  const { taxToPay: provTaxToPay, taxRateUsed: provTaxRateUsed } = calcTax(
    GROSS_SALARY,
    config.ONTARIO
  );
  // console.log(
  //   `provTaxToPay: ${provTaxToPay}, provTaxRateUsed: ${provTaxRateUsed}`
  // );

  // ======= PRINT OUT =======
  const taxSum =
    provTaxToPay.reduce((acc, tax) => acc + tax) +
    fedralTaxToPay.reduce((acc, tax) => acc + tax);
  const takeHome = GROSS_SALARY - taxSum;
  const avgTaxRate = (taxSum / GROSS_SALARY) * 100;
  const marginalTax =
    Math.max(...fedTaxRateUsed) + Math.max(...provTaxRateUsed);

  console.log(
    `Tax to pay: ${formatNumberInternational(
      taxSum
    )},\nTake home amount: ${formatNumberInternational(
      takeHome
    )},\nAverage Tax Rate: ${avgTaxRate.toFixed(
      2
    )}%,\nMarginal Tax Rate: ${marginalTax}%`
  );
};

takeHomeIncome();
