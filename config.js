// export const FEDRAL_TAX = {//   FIRST: { percentage: 15, minAmount: 0, maxAmount: 50197 },//   SECOND: { percentage: 20.5, minAmount: 50197, maxAmount: 100392 },//   THIRD: { percentage: 26, minAmount: 100392, maxAmount: 155625 },
//   FOURTH: { percentage: 29, minAmount: 155625, maxAmount: 221708 },
//   LAST: { percentage: 33, minAmount: 221708, maxAmount: -1 },
// };

export const ONTARIO = {
  // 5.05% on the portion of your taxable income that is $46,226 or less, plus
  // 9.15% on the portion of your taxable income that is more than $46,226 but not more than $92,454, plus
  // 11.16% on the portion of your taxable income that is more than $92,454 but not more than $150,000, plus
  // 12.16% on the portion of your taxable income that is more than $150,000 but not more than $220,000, plus
  // 13.16% on the portion of your taxable income that is more than $220,000
};

/* 
Provincial and territorial tax rates (combined chart)
Provinces and territories 	Rates

Newfoundland and Labrador                       	
8.7% on the portion of your taxable income that is $39,147 or less, plus
14.5% on the portion of your taxable income that is more than $39,147 but not more than $78,294, plus
15.8% on the portion of your taxable income that is more than $78,294 but not more than $139,780, plus
17.8% on the portion of your taxable income that is more than $139,780 but not more than $195,693, plus
19.8% on the portion of your taxable income that is more than $195,693 but not more than $250,000, plus
20.8% on the portion of your taxable income that is more than $250,000 but not more than $500,000, plus
21.3% on the portion of your taxable income that is more than $500,000 but not more than $1,000,000, plus
21.8% on the portion of your taxable income that is more than $1,000,000

Prince Edward Island
9.8% on the portion of your taxable income that is $31,984 or less, plus
13.8% on the portion of your taxable income that is more than $31,984 but not more than $63,969, plus
16.7% on the portion of your taxable income that is more than $63,969


Nova Scotia	
8.79% on the portion of your taxable income that is $29,590 or less, plus
14.95% on the portion of your taxable income that is more than $29,590 but not more than $59,180, plus
16.67% on the portion of your taxable income that is more than $59,180 but not more than $93,000, plus
17.5% on the portion of your taxable income that is more than $93,000 but not more than $150,000, plus
21% on the portion of your taxable income that is more than $150,000

New Brunswick	
9.4% on the portion of your taxable income that is $44,887 or less, plus
14.82% on the portion of your taxable income that is more than $44,887 but not more than $89,775, plus
16.52% on the portion of your taxable income that is more than $89,775 but not more than $145,955, plus
17.84% on the portion of your taxable income that is more than $145,955 but not more than $166,280, plus
20.3% on the portion of your taxable income that is more than $166,280

Quebec	Go to Income tax rates (Revenu Québec Web site).
$46,295 or less	15%
More than $46,295 but not more than $92,580	20%
More than $92,580 but not more than $112,655	24%
More than $112,655	25.75%

Ontario	
5.05% on the portion of your taxable income that is $46,226 or less, plus
9.15% on the portion of your taxable income that is more than $46,226 but not more than $92,454, plus
11.16% on the portion of your taxable income that is more than $92,454 but not more than $150,000, plus
12.16% on the portion of your taxable income that is more than $150,000 but not more than $220,000, plus
13.16% on the portion of your taxable income that is more than $220,000

Manitoba	
10.8% on the portion of your taxable income that is $34,431 or less, plus
12.75% on the portion of your taxable income that is more than $34,431 but not more than $74,416, plus
17.4% on the portion of your taxable income that is more than $74,416

Saskatchewan	
10.5% on the portion of your taxable income that is $46,773 or less, plus
12.5% on the portion of your taxable income that is more than $46,773 but not more than $133,638, plus
14.5% on the portion of your taxable income that is more than $133,638

Alberta	
10% on the portion of your taxable income that is $131,220 or less, plus
12% on the portion of your taxable income that is more than $131,220 but not more than $157,464, plus
13% on the portion of your taxable income that is more than $157,464 but not more than $209,952, plus
14% on the portion of your taxable income that is more than $209,952 but not more than $314,928, plus
15% on the portion of your taxable income that is more than $314,928

British Columbia	
5.06% on the portion of your taxable income that is $43,070 or less, plus
7.7% on the portion of your taxable income that is more than $43,070 but not more than $86,141, plus
10.5% on the portion of your taxable income that is more than $86,141 but not more than $98,901, plus
12.29% on the portion of your taxable income that is more than $98,901 but not more than $120,094, plus
14.7% on the portion of your taxable income that is more than $120,094 but not more than $162,832, plus
16.8% on the portion of your taxable income that is more than $162,832 but not more than $227,091, plus
20.5% on the portion of your taxable income that is more than $227,091

Yukon	
6.4% on the portion of your taxable income that is $50,197 or less, plus
9% on the portion of your taxable income that is more than $50,197 but not more than $100,392, plus
10.9% on the portion of your taxable income that is more than $100,392 but not more than $155,625, plus
12.8% on the portion of your taxable income that is more than $155,625 but not more than $500,000, plus
15% on the portion of your taxable income that is more than $500,000

Northwest Territories	
5.9% on the portion of your taxable income that is $45,462 or less, plus
8.6% on the portion of your taxable income that is more than $45,462 but not more than $90,927, plus
12.2% on the portion of your taxable income that is more than $90,927 but not more than $147,826, plus
14.05% on the portion of your taxable income that is more than $147,826

Nunavut	
4% on the portion of your taxable income that is $47,862 or less, plus
7% on the portion of your taxable income that is more than $47,862 but not more than $95,724, plus
9% on the portion of your taxable income that is more than $95,724 but not more than $155,625, plus
11.5% on the portion of your taxable income that is more than $155,625
*/
