export const PROV_ONTARIO = 'Ontario';
export const PROV_NEWFOUNDLAND_AND_LABRADOR = 'Newfoundland and Labrador';
export const PROV_PRINCE_EDDWARD_ISLAND = 'Prince Edward Island';
export const PROV_NOVA_SCOTIA = 'Nova Scotia';
export const PROV_NEW_BRUNSWICK = 'New Brunswick';
export const PROV_QUEBEC = 'Quebec';
export const PROV_MAINTOBA = 'Manitoba';

export const FEDRAL_TAX = [
  { lower: 0, upper: 50197, taxRate: 15 },
  { lower: 50197, upper: 100392, taxRate: 20.5 },
  { lower: 100392, upper: 155625, taxRate: 26 },
  { lower: 155625, upper: 221708, taxRate: 29 },
  { lower: 221708, upper: undefined, taxRate: 33 },
];

export const ONTARIO = [
  { lower: 0, upper: 46226, taxRate: 5.05 },
  { lower: 46226, upper: 92454, taxRate: 9.15 },
  { lower: 92454, upper: 150000, taxRate: 11.16 },
  { lower: 150000, upper: 220000, taxRate: 12.16 },
  { lower: 220000, upper: undefined, taxRate: 13.16 },
];

// For Year 2022: ONTARIO
export const CPP = {
  max_annual_pensionable_earning: 64900,
  basic_exemption: 3500,
  max_contributory_earning: 61400,
  employee_employer_contribution_rate: 5.7,
  max_annual_employee_and_employer_contribution: 3499.8,
  max_annual_self_employed_contribution: 6999.6,
};

// For Year 2022: ONTARIO
export const EI = {
  max_annual_insurable_earnings: 60300,
  rate: 1.58,
  max_annual_employee_premium: 952.74,
  max_annual_employer_premium: 1333.84,
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
