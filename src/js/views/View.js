export default class View {
  _data;

  render(data, salary) {
    // console.log(data);

    this._data = data;

    const markup = this._generateMarkup();

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * renderError: Rendering error on the UI
   * @param {String} message if the message is undefined then Static message will take over.
   */
  renderError(message = this._errorMessage) {
    const markup = `
          <div class="error">
            <p>${message}</p>
          </div>
    `;

    // this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * Documentation protected method _clear()
   * This clears the HTML elements in the sections.
   */
  _clear() {
    this._parentElement.innerHTML = '';
  }
}
