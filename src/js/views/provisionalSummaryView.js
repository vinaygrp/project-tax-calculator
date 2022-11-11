import View from './View.js';
import { formatNumberInternational } from '../helper.js';
import * as config from '../config.js';

class FederalSummaryView extends View {
  _parentElement = document.querySelector('.provisional-breakdown');

  _generateMarkup() {
    let markup = '';

    for (let i = 0; i < config.ONTARIO.length; i++) {
      const ZERO = formatNumberInternational(0);
      markup += `
          <tr>
            <td>${config.ONTARIO[i].taxRate}%</td>       <!-- Tax Rate -->
            <td>${
              config.ONTARIO[i].lower
                ? formatNumberInternational(config.ONTARIO[i].lower)
                : ZERO
            }</td> <!-- Bracket Lower Limit -->
            <td>${
              config.ONTARIO[i].upper
                ? formatNumberInternational(config.ONTARIO[i].upper)
                : ZERO
            }</td>    <!-- Bracket Upper Limit -->
            <td>${
              this._data.provIncomeTaxable[i]
                ? formatNumberInternational(this._data.provIncomeTaxable[i])
                : ZERO
            }</td>  <!-- Taxable Income -->
            <td>${
              this._data.provTaxToPay[i]
                ? formatNumberInternational(this._data.provTaxToPay[i])
                : ZERO
            }</td>      <!-- Tax to Pay -->
          </tr>
          `;
    }
    return markup;
  }
}

export default new FederalSummaryView();
