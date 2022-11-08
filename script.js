'use strict';

/* 
15% on the first $50,197 of taxable income, plus
20.5% on the next $50,195 of taxable income (on the portion of taxable income over 50,197 up to $100,392), plus
26% on the next $55,233 of taxable income (on the portion of taxable income over $100,392 up to $155,625), plus
29% on the next $66,083 of taxable income (on the portion of taxable income over 155,625 up to $221,708), plus
33% of taxable income over $221,708
--------------------
*/

const FEDRAL_TAX_NEW = [
  { lower: 0, upper: 50197, taxRate: 15 },
  { lower: 50197, upper: 100392, taxRate: 20.5 },
  { lower: 100392, upper: 155625, taxRate: 26 },
  { lower: 155625, upper: 221708, taxRate: 29 },
  { lower: 221708, upper: undefined, taxRate: 33 },
];

/* 
  5.05% on the portion of your taxable income that is $46,226 or less, plus
  9.15% on the portion of your taxable income that is more than $46,226 but not more than $92,454, plus
  11.16% on the portion of your taxable income that is more than $92,454 but not more than $150,000, plus
  12.16% on the portion of your taxable income that is more than $150,000 but not more than $220,000, plus
  13.16% on the portion of your taxable income that is more than $220,000
*/

const ONTARIO = [
  { lower: 0, upper: 46226, taxRate: 5.05 },
  { lower: 46226, upper: 92454, taxRate: 9.15 },
  { lower: 92454, upper: 150000, taxRate: 11.16 },
  { lower: 150000, upper: 220000, taxRate: 12.16 },
  { lower: 220000, upper: undefined, taxRate: 13.16 },
];
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

// What is my take home income
const takeHomeIncome = function () {
  let fedTaxableIncome,
    provTaxableIncome = GROSS_SALARY;
  const fedralTaxToPay = [];
  const provincialTaxToPay = [];
  const fedTaxRateUsed = [];
  const provTaxRateUsed = [];

  //  ======= FEDRAL TAX =======
  const fedLimits = FEDRAL_TAX_NEW.filter(
    (limit) => GROSS_SALARY > limit.lower
  );
  console.log('fedLimits:', fedLimits);
  fedLimits.forEach((fed) => {
    fedTaxableIncome =
      GROSS_SALARY > fed.upper
        ? fed.upper - fed.lower
        : GROSS_SALARY - fed.lower;
    fedralTaxToPay.push(fedTaxableIncome * (fed.taxRate / 100));
    fedTaxRateUsed.push(fed.taxRate);
  });
  console.log(
    'fedralTaxToPay:',
    fedralTaxToPay,
    fedralTaxToPay.reduce((acc, tax) => acc + tax)
  );

  // ======= PROVINCIAL TAX.  =======
  const provLimits = ONTARIO.filter((limit) => GROSS_SALARY > limit.lower);
  console.log('provLimits:', provLimits);

  provLimits.forEach((prov) => {
    provTaxableIncome =
      GROSS_SALARY > prov.upper
        ? prov.upper - prov.lower
        : GROSS_SALARY - prov.lower;
    provincialTaxToPay.push(provTaxableIncome * (prov.taxRate / 100));
    provTaxRateUsed.push(prov.taxRate);
  });
  console.log(
    'provincialTaxToPay:',
    provincialTaxToPay,
    provincialTaxToPay.reduce((acc, tax) => acc + tax)
  );
  console.log('Fedral Tax Rate Used:', fedTaxRateUsed);
  console.log('Provicinal Tax Rate Used:', provTaxRateUsed);

  // ======= PRINT OUT =======
  const taxSum =
    provincialTaxToPay.reduce((acc, tax) => acc + tax) +
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
