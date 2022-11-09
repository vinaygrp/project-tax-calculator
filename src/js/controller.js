'use strict';
import * as config from './config.js';
import * as model from './model.js';

const form = document.querySelector('.form');
const btnGrossIncome = document.querySelector('.form__btn--gross-income');
const inputGrossIncome = document.querySelector('.form__input--gross-income');

// const GROSS_SALARY = 50197; // First bracket
// const GROSS_SALARY = 98850; // second bracket
// const GROSS_SALARY = 120000; // second + third bracket
// const GROSS_SALARY = 180000; // second + third + fourth bracket
// const GROSS_SALARY = 221709; // second + third + fourth + fifth bracket

/**
 * Takes a Number and converts it into a String in International format
 * @param {number} num
 * @returns String in the INternation format of the country
 */
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
const takeHomeIncome = function (grossSalary) {
  console.log(
    `Annual Gross Salary CAD${formatNumberInternational(grossSalary)}`
  );

  //  ======= FEDRAL TAX =======
  const { taxToPay: fedralTaxToPay, taxRateUsed: fedTaxRateUsed } = calcTax(
    grossSalary,
    config.FEDRAL_TAX
  );
  // console.log(
  //   `fedralTaxToPay: ${fedralTaxToPay}, fedTaxRateUsed: ${fedTaxRateUsed}`
  // );

  // ======= PROVINCIAL TAX.  =======
  const { taxToPay: provTaxToPay, taxRateUsed: provTaxRateUsed } = calcTax(
    grossSalary,
    config.ONTARIO
  );
  // console.log(
  //   `provTaxToPay: ${provTaxToPay}, provTaxRateUsed: ${provTaxRateUsed}`
  // );

  // ======= PRINT OUT =======
  const taxSum =
    provTaxToPay.reduce((acc, tax) => acc + tax) +
    fedralTaxToPay.reduce((acc, tax) => acc + tax);
  const takeHome = grossSalary - taxSum;
  const avgTaxRate = (taxSum / grossSalary) * 100;
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

// EVENT LISTENERS

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(+inputGrossIncome.value);
  takeHomeIncome(+inputGrossIncome.value);
});

btnGrossIncome.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(+inputGrossIncome.value);
  takeHomeIncome(+inputGrossIncome.value);
});
