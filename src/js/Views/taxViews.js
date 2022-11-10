import { formatNumberInternational } from '../helper.js';

class TaxView {
  _parentElement = document.querySelector('.form');
  _data;

  render(data, salary) {
    console.log(data);

    this._data = data;

    const markup = this._generateMarkup();

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  getSalary() {
    const salary = this._parentElement.querySelector('.salary__field').value;
    this._clearInput();
    return salary;
  }

  _clearInput() {
    this._parentElement.querySelector('.salary__field').value = '';
  }

  addHandlerRender(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  _generateMarkup() {
    console.log(`
    <th>Fedral Tax: ${formatNumberInternational(this._data.totalFedTax)}</th>
    <th>Provincial Tax: ${formatNumberInternational(
      this._data.totalProvTax
    )}</th>
    <th>Tax to Pay: ${formatNumberInternational(this._data.taxToPay)}</th>
    <th>Take Home Amount: ${formatNumberInternational(this._data.takeHome)}</th>
    <th>Average Tax Rate: ${this._data.avgTaxRate.toFixed(2)}%</th>
    <th>Marginal Tax Rate: ${this._data.marginalTax.toFixed(2)}%</th>    
    `);

    return `
    <div>
      <h1>Annual Gross Salary <span>${formatNumberInternational(
        this._data.salary
      )}</span></h1>
      <h2>Results</h2>
      <table class="content-table">
        <thead>
          <tr class="to-upper">
            <th>Fedral Tax</th>
            <th>Provincial Tax</th>
            <th>Tax to Pay</th>
            <th>Take Home Amount</th>
            <th>Average Tax Rate</th>
            <th>Marginal Tax Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${formatNumberInternational(this._data.totalFedTax)}</td>
            <td>${formatNumberInternational(this._data.totalProvTax)}</td>
            <td>${formatNumberInternational(this._data.taxToPay)}</td>
            <td>${formatNumberInternational(this._data.takeHome)}</td>
            <td>${this._data.avgTaxRate.toFixed(2)}%</td>
            <td>${this._data.marginalTax.toFixed(2)}%</td>
          </tr>
        </tbody>
      </table>
    </div>
    `;

    // console.log(
    //     `Tax to pay: ${formatNumberInternational(
    //       tax.taxSum
    //     )},\nTake home amount: ${formatNumberInternational(
    //       tax.takeHome
    //     )},\nAverage Tax Rate: ${tax.avgTaxRate.toFixed(2)}%,\nMarginal Tax Rate: ${
    //       tax.marginalTax
    //     }%`
    //   );
  }

  /**
   * Documentation protected method _clear()
   * This clears the HTML elements in the sections.
   */
  _clear() {
    this._parentElement.innerHTML = '';
  }
}

export default new TaxView();
