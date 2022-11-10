/**
 * Takes a Number and converts it into a String in International format
 * @param {number} num
 * @returns String in the INternation format of the country
 */
export const formatNumberInternational = function (num) {
  const options = {
    style: 'currency',
    unit: 'celsius',
    currency: 'CAD',
  };
  return new Intl.NumberFormat('en-CA', options).format(num);
};
