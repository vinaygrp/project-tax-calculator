'use strict';
import * as config from './config.js';
import { formatNumberInternational } from './helper.js';

// TEST
// export const printRandom = function () {
//   console.log('MODEL.JS');
//   console.log(config.FEDRAL_TAX);
// };

export const tax = {
  fedTaxToPay: [],
  fedTaxRateUsed: [],
  fedIncomeTaxable: [],
  provTaxToPay: [],
  provTaxRateUsed: [],
  provIncomeTaxable: [],
  salary: 0,
  totalFedTax: 0,
  totalProvTax: 0,
  taxToPay: 0,
  takeHome: 0,
  avgTaxRate: 0,
  marginalTax: 0,
  cppMaxAnnEmpAndEmprContri: 0,
};

const _calculateCPP = function (grossSalary) {
  // console.log(config.CPP.max_annual_pensionable_earning);
  let baseAmount = grossSalary;
  if (grossSalary > config.CPP.max_annual_pensionable_earning) {
    baseAmount = config.CPP.max_annual_pensionable_earning;
  }

  const maxContributionEarning = baseAmount - config.CPP.basic_exemption;
  const maxAnnualEmpAndEmprContri =
    maxContributionEarning *
    (config.CPP.employee_employer_contribution_rate / 100);
  console.log(
    'Max Annual Emp and Empr Contribution:',
    maxAnnualEmpAndEmprContri
  );
};

/**
 * Calculates the TaxToPay for Fedral and Provincial
 * @param {number} grossSalary
 * @param {Array Object} taxArrayObj
 * @returns {Object Array} taxToPay, taxRateUsed
 */
const _calcTaxForFedAndProv = function (grossSalary, taxArrayObj) {
  let taxableIncome = grossSalary;
  const taxToPay = [];
  const taxRateUsed = [];
  const incomeTaxable = [];

  // TAKES THE ARRAY OBJECT OF THE PASSED OJECT AND FILTERS THEM BASED ON THE CONDITION.
  const limits = taxArrayObj.filter((limit) => grossSalary > limit.lower);
  // console.log('Limits:', limits);
  limits.forEach((arrObj) => {
    taxableIncome =
      grossSalary > arrObj.upper
        ? arrObj.upper - arrObj.lower
        : grossSalary - arrObj.lower;
    incomeTaxable.push(taxableIncome);
    taxToPay.push(taxableIncome * (arrObj.taxRate / 100));
    taxRateUsed.push(arrObj.taxRate);
  });
  // console.log(
  //   'TaxToPay:',
  //   taxToPay,
  //   taxToPay.reduce((acc, tax) => acc + tax)
  // );

  return { incomeTaxable, taxToPay, taxRateUsed };
};

const _fedralTax = function (grossSalary) {
  //  ======= FEDRAL TAX =======
  const { incomeTaxable, taxToPay, taxRateUsed } = _calcTaxForFedAndProv(
    grossSalary,
    config.FEDRAL_TAX
  );
  tax.fedIncomeTaxable = [...incomeTaxable];
  tax.fedTaxToPay = [...taxToPay];
  tax.fedTaxRateUsed = [...taxRateUsed];

  // console.log(
  //   `fedralTaxToPay: ${tax.fedTaxToPay}, fedTaxRateUsed: ${tax.fedTaxRateUsed}`
  // );
};

const _provincialTax = function (grossSalary) {
  // ======= PROVINCIAL TAX.  =======
  const { incomeTaxable, taxToPay, taxRateUsed } = _calcTaxForFedAndProv(
    grossSalary,
    config.ONTARIO
  );
  tax.provIncomeTaxable = [...incomeTaxable];
  tax.provTaxToPay = [...taxToPay];
  tax.provTaxRateUsed = [...taxRateUsed];
  // console.log(
  //   `provTaxToPay: ${provTaxToPay}, provTaxRateUsed: ${provTaxRateUsed}`
  // );
};

/**
 * TAKES IN THE VALUE FROM THE TOP LEVEL SHOWS THE USERS WHAT THEY CAN TAKE HOME.
 */
export const calculateTax = function (grossSalary) {
  console.log(
    `Annual Gross Salary CAD${formatNumberInternational(grossSalary)}`
  );

  tax.salary = +grossSalary;

  // const { taxToPay: fedTaxToPay, taxRateUsed: fedTaxRateUsed } =
  _fedralTax(grossSalary);

  // const { taxToPay: provTaxToPay, taxRateUsed: provTaxRateUsed } =
  _provincialTax(grossSalary);

  _calculateCPP(grossSalary);

  tax.totalFedTax = tax.provTaxToPay.reduce((acc, tax) => acc + tax);
  tax.totalProvTax = tax.fedTaxToPay.reduce((acc, tax) => acc + tax);
  tax.taxToPay = tax.totalFedTax + tax.totalProvTax;
  tax.takeHome = grossSalary - tax.taxToPay;
  tax.avgTaxRate = (tax.taxToPay / grossSalary) * 100;
  tax.marginalTax =
    Math.max(...tax.fedTaxRateUsed) + Math.max(...tax.provTaxRateUsed);

  // console.log(
  //   `Tax to pay: ${formatNumberInternational(
  //     tax.taxToPay
  //   )},\nTake home amount: ${formatNumberInternational(
  //     tax.takeHome
  //   )},\nAverage Tax Rate: ${tax.avgTaxRate.toFixed(2)}%,\nMarginal Tax Rate: ${
  //     tax.marginalTax
  //   }%`
  // );
};
