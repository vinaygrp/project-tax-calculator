import View from './View.js';

class CalcTaxView extends View {
  _parentElement = document.querySelector('.salary-form');
  _errorMessage = 'Incorrect Input';

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
}

export default new CalcTaxView();
