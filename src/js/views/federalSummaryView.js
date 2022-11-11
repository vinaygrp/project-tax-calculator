import View from './View.js';
import { formatNumberInternational } from '../helper.js';
import * as config from '../config.js';

class FederalSummaryView extends View {
  _parentElement = document.querySelector('.federal-breakdown');

  _generateMarkup() {
    let markup = '';

    for (let i = 0; i < config.FEDRAL_TAX.length; i++) {
      const ZERO = formatNumberInternational(0);
      markup += `
          <tr>
            <td>${config.FEDRAL_TAX[i].taxRate}%</td>       <!-- Tax Rate -->
            <td>${
              config.FEDRAL_TAX[i].lower
                ? formatNumberInternational(config.FEDRAL_TAX[i].lower)
                : ZERO
            }</td> <!-- Bracket Lower Limit -->
            <td>${
              config.FEDRAL_TAX[i].upper
                ? formatNumberInternational(config.FEDRAL_TAX[i].upper)
                : ZERO
            }</td>    <!-- Bracket Upper Limit -->
            <td>${
              this._data.fedIncomeTaxable[i]
                ? formatNumberInternational(this._data.fedIncomeTaxable[i])
                : ZERO
            }</td>  <!-- Taxable Income -->
            <td>${
              this._data.fedTaxToPay[i]
                ? formatNumberInternational(this._data.fedTaxToPay[i])
                : ZERO
            }</td>      <!-- Tax to Pay -->
          </tr>
          `;
    }
    return markup;
  }
}

export default new FederalSummaryView();
