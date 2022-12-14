import View from './View.js';
import { formatNumberInternational } from '../helper.js';

class CalcTaxSummaryView extends View {
  _parentElement = document.querySelector('.tax-takehome-results');

  _generateMarkup() {
    document.querySelector('.gross-salary').textContent =
      formatNumberInternational(this._data.salary);

    // console.log(`
    // <th>Fedral Tax: ${formatNumberInternational(this._data.totalFedTax)}</th>
    // <th>Provincial Tax: ${formatNumberInternational(
    //   this._data.totalProvTax
    // )}</th>
    // <th>Tax to Pay: ${formatNumberInternational(this._data.taxToPay)}</th>
    // <th>Take Home Amount: ${formatNumberInternational(this._data.takeHome)}</th>
    // <th>Average Tax Rate: ${this._data.avgTaxRate.toFixed(2)}%</th>
    // <th>Marginal Tax Rate: ${this._data.marginalTax.toFixed(2)}%</th>
    // `);

    // <th>Fedral Tax</th>
    // <th>Provincial Tax</th>
    // <th>Tax to Pay</th>
    // <th>Max Annual CPP</th>
    // <th>Max Annual EI premium</th>
    // <th>Take Home Amount</th>
    // <th>Average Tax Rate</th>
    // <th>Marginal Tax Rate</th>

    return `
          <tr>
            <td>${formatNumberInternational(this._data.totalFedTax)}</td>
            <td>${formatNumberInternational(this._data.totalProvTax)}</td>
            <td>${formatNumberInternational(this._data.taxToPay)}</td>
            <td>${formatNumberInternational(
              this._data.cppMaxAnnEmpAndEmprContri
            )}</td>
            <td>${formatNumberInternational(this._data.eiMaxAnnEmpPrem)}</td>
            <td>${formatNumberInternational(this._data.takeHome)}</td>
            <td>${this._data.avgTaxRate.toFixed(2)}%</td>
            <td>${this._data.marginalTax.toFixed(2)}%</td>
          </tr>
    `;
  }
}

export default new CalcTaxSummaryView();
