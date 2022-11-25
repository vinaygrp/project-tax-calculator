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
   * Documentation protected method _clear()
   * This clears the HTML elements in the sections.
   */
  _clear() {
    this._parentElement.innerHTML = '';
  }
}
