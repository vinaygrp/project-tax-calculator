'use strict';

const FEDRAL_TAX = {
  FIRST: {
    taxRate: 15,
    minAmount: 0,
    maxAmount: 50197,
  },
  SECOND: {
    taxRate: 20.5,
    minAmount: 50197,
    maxAmount: 100392,
  },
  THIRD: {
    taxRate: 26,
    minAmount: 100392,
    maxAmount: 155625,
    setTaxOnAmount: this.maxAmount * this.taxRate,
  },
  FOURTH: {
    taxRate: 29,
    minAmount: 155625,
    maxAmount: 221708,
    setTaxOnAmount: this.maxAmount * this.taxRate,
  },
  FIFTH: {
    taxRate: 33,
    minAmount: 221708,
    maxAmount: -1,
    setTaxOnAmount: this.maxAmount * this.taxRate,
  },
};

/*
If your taxable income is $50,197 or less, use the following chart:
--------------------
Enter your taxable income from line 26000 of your return.   ____________________ Line 67
Base amount                                                 ____________− 0.00__ Line 68
Line 67 minus line 68 (cannot be negative)                  =___________________ Line 69
Federal tax rate                                            × 15%_______________ Line 70
Line 69 multiplied by the percentage from line 70           = __________________ Line 71
Tax on the amount from line 71                              + 0.00______________ Line 72
Line 71 plus line 72                                        =___________________ Line 73
--------------------


// const firstBracket = function (baseAmount) {
//   const taxOnAmount = calculateTaxOnAmount(FEDRAL_TAX.FIRST, baseAmount);
//   let fedralTaxValue =
//     baseAmount * (FEDRAL_TAX.FIRST.taxRate / 100) + taxOnAmount;
//   return fedralTaxValue;
// };


  If your taxable income is more than $50,197 but not more than $100,392, use the following chart:
  --------------------
  Enter your taxable income from line 26000 of your return.   ____________________ Line 67
  Base amount                                                 _______− 50,197.00__ Line 68
  Line 67 minus line 68 (cannot be negative)                  =___________________ Line 69
  Federal tax rate                                            × 20.5%_____________ Line 70
  Line 69 multiplied by the percentage from line 70           = __________________ Line 71
  Tax on the amount from line 71                              + 7,529.55__________ Line 72
  Line 71 plus line 72                                        =___________________ Line 73
  --------------------


// const secondBracket = function (baseAmount) {
//   const taxOnAmount = calculateTaxOnAmount(FEDRAL_TAX.FIRST, baseAmount);
//   let fedralTaxValue =
//     baseAmount * (FEDRAL_TAX.SECOND.taxRate / 100) + taxOnAmount;
//   return fedralTaxValue;
// };


  If your taxable income is more than $100,392 but not more than $155,625, use the following chart:
  --------------------
  Enter your taxable income from line 26000 of your return.   ____________________ Line 67
  Base amount                                                 _____ − 100,392.00__ Line 68
  Line 67 minus line 68 (cannot be negative)                  =___________________ Line 69
  Federal tax rate                                            × 26%_______________ Line 70
  Line 69 multiplied by the percentage from line 70           = __________________ Line 71
  Tax on the amount from line 71                              + 17,819.53 ________ Line 72
  Line 71 plus line 72                                        =___________________ Line 73
  --------------------


const thirdBracket = function (baseAmount) {
  return 0;
};

 
  If your taxable income is more than $155,625 but not more than $221,708, use the following chart:
  --------------------
  Enter your taxable income from line 26000 of your return.   ____________________ Line 67
  Base amount                                                 _____ − 155,625.00__ Line 68
  Line 67 minus line 68 (cannot be negative)                  =___________________ Line 69
  Federal tax rate                                            × 29%_______________ Line 70
  Line 69 multiplied by the percentage from line 70           = __________________ Line 71
  Tax on the amount from line 71                              + 32,180.11_________ Line 72
  Line 71 plus line 72                                        =___________________ Line 73
  --------------------

const fourthBracket = function (baseAmount) {
  return 0;
};


  If your taxable income is more than $221,708, use the following chart:
  --------------------
  Enter your taxable income from line 26000 of your return.   ____________________ Line 67
  Base amount                                                 _____ − 221,708.00__ Line 68
  Line 67 minus line 68 (cannot be negative)                  =___________________ Line 69
  Federal tax rate                                            × 33%_______________ Line 70
  Line 69 multiplied by the percentage from line 70           = __________________ Line 71
  Tax on the amount from line 71                              + 51,344.18_________ Line 72
  Line 71 plus line 72                                        =___________________ Line 73
  --------------------


const fifthBracket = function (baseAmount) {
  return 0;
};
*/
/* 
15% on the first $50,197 of taxable income, plus
20.5% on the next $50,195 of taxable income (on the portion of taxable income over 50,197 up to $100,392), plus
26% on the next $55,233 of taxable income (on the portion of taxable income over $100,392 up to $155,625), plus
29% on the next $66,083 of taxable income (on the portion of taxable income over 155,625 up to $221,708), plus
33% of taxable income over $221,708
--------------------
*/

// const GROSS_SALARY = 50197; // First bracket
// const GROSS_SALARY = 98850; // second bracket
// const GROSS_SALARY = 120000; // second + third bracket
// const GROSS_SALARY = 180000; // second + third + fourth bracket
const GROSS_SALARY = 221709; // second + third + fourth + fifth bracket

// const calcFedralTaxOnTheAmount = function (
//   baseAmount,
//   currObjValue,
//   prevObjValue
// ) {
//   if (currObjValue === prevObjValue) return 0;

//   return prevObjValue.maxAmount * (prevObjValue.taxRate / 100);
// };

// const calculateFedralTaxValue = function (
//   baseAmount,
//   currObjValue,
//   prevObjValue = FEDRAL_TAX.FIRST
// ) {
//   const taxOnTheAmount = calcFedralTaxOnTheAmount(
//     GROSS_SALARY,
//     currObjValue,
//     prevObjValue
//   );
//   console.log(`Tax On the Amount: ${taxOnTheAmount}`);
//   const fedralTaxValue =
//     baseAmount * (currObjValue.taxRate / 100) + taxOnTheAmount;
//   return fedralTaxValue;
// };

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'CAD',
};

console.log(
  'CAD:',
  new Intl.NumberFormat('en-CA', options).format(GROSS_SALARY)
);

// What is my take home income
const takeHomeIncome = function () {
  let taxableIncome = GROSS_SALARY;
  const fedralTaxToPay = [];

  // FIRST BRACKET
  if (GROSS_SALARY > FEDRAL_TAX.FIRST.minAmount) {
    taxableIncome =
      GROSS_SALARY > FEDRAL_TAX.FIRST.maxAmount
        ? FEDRAL_TAX.FIRST.maxAmount - FEDRAL_TAX.FIRST.minAmount
        : GROSS_SALARY - FEDRAL_TAX.FIRST.minAmount;
    console.log('FIRST Bracket taxable income:', taxableIncome);
    fedralTaxToPay.push(taxableIncome * (FEDRAL_TAX.FIRST.taxRate / 100));
  }

  // SECOND BRACKET
  if (GROSS_SALARY > FEDRAL_TAX.SECOND.minAmount) {
    taxableIncome =
      GROSS_SALARY > FEDRAL_TAX.SECOND.maxAmount
        ? FEDRAL_TAX.SECOND.maxAmount - FEDRAL_TAX.SECOND.minAmount
        : GROSS_SALARY - FEDRAL_TAX.SECOND.minAmount;

    console.log('SECOND Bracket taxable income:', taxableIncome);
    fedralTaxToPay.push(taxableIncome * (FEDRAL_TAX.SECOND.taxRate / 100));
  }

  // THIRD BRACKET
  if (GROSS_SALARY > FEDRAL_TAX.THIRD.minAmount) {
    taxableIncome =
      GROSS_SALARY > FEDRAL_TAX.THIRD.maxAmount
        ? FEDRAL_TAX.THIRD.maxAmount - FEDRAL_TAX.THIRD.minAmount
        : GROSS_SALARY - FEDRAL_TAX.THIRD.minAmount;

    console.log('THIRD Bracket taxable income:', taxableIncome);
    fedralTaxToPay.push(taxableIncome * (FEDRAL_TAX.THIRD.taxRate / 100));
  }

  if (GROSS_SALARY > FEDRAL_TAX.FOURTH.minAmount) {
    taxableIncome =
      GROSS_SALARY > FEDRAL_TAX.FOURTH.maxAmount
        ? FEDRAL_TAX.FOURTH.maxAmount - FEDRAL_TAX.FOURTH.minAmount
        : GROSS_SALARY - FEDRAL_TAX.FOURTH.minAmount;

    console.log('FOURTH Bracket taxable income:', taxableIncome);
    fedralTaxToPay.push(taxableIncome * (FEDRAL_TAX.FOURTH.taxRate / 100));
  }

  if (GROSS_SALARY > FEDRAL_TAX.FIFTH.minAmount) {
    taxableIncome = GROSS_SALARY - FEDRAL_TAX.FIFTH.minAmount;

    console.log('FIFTH Bracket taxable income:', taxableIncome);
    fedralTaxToPay.push(taxableIncome * (FEDRAL_TAX.FIFTH.taxRate / 100));
  }

  // Show the amount.
  console.log('TAXes: ', fedralTaxToPay);

  let taxSum = fedralTaxToPay.reduce((acc, amt) => acc + amt);
  const takeHome = new Intl.NumberFormat('en-CA', options).format(
    GROSS_SALARY - taxSum
  );
  taxSum = new Intl.NumberFormat('en-CA', options).format(taxSum);
  console.log(`Tax to pay: ${taxSum}, Take home amount: ${takeHome}`);
};

takeHomeIncome();
