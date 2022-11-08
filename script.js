"use strict";

const FEDRAL_TAX = {
  FIRST: { percentage: 15, minAmount: 0, maxAmount: 50197 },
  SECOND: { percentage: 20.5, minAmount: 50197, maxAmount: 100392 },
  THIRD: { percentage: 26, minAmount: 100392, maxAmount: 155625 },
  FOURTH: { percentage: 29, minAmount: 155625, maxAmount: 221708 },
  LAST: { percentage: 33, minAmount: 221708, maxAmount: -1 },
};

console.log(FEDRAL_TAX.FIRST);

/* 
15% on the first $50,197 of taxable income, plus
20.5% on the next $50,195 of taxable income (on the portion of taxable income over 50,197 up to $100,392), plus
26% on the next $55,233 of taxable income (on the portion of taxable income over $100,392 up to $155,625), plus
29% on the next $66,083 of taxable income (on the portion of taxable income over 155,625 up to $221,708), plus
33% of taxable income over $221,708
*/
