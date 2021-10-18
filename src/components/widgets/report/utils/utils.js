/**
 *  Convert a number to given decimals
 *
 * @param {number} value number to format
 * @param {number} decimals decimal precision of the number
 * @returns {string} converted number as a string
 */
export function convertToFixed(value = null, decimals = null) {
  if (value === null || isNaN(value)) return value;
  decimals = parseInt(decimals);
  value = parseFloat(value);
  if (isNaN(decimals)) return value;
  return value.toFixed(parseInt(decimals));
}

/**
 *  Format a numeric value represented as a string
 *
 * @param {string} num value to format
 * @param {string} prefix prefix to the value
 * @param {syting} suffix suffix to the value
 * @returns {string} formated value
 */
export function formatNumericString(num = null, prefix = "", suffix = "") {
  if (num === null) return "";
  num = parseFloat(num);
  if (!isNaN(num)) {
    if (num > 1000000) num = (num / 1000000).toFixed(1) + "m";
    if (num > 1000000000) num = (num / 1000000000).toFixed(1) + "b";
    else if (num > 1000) num = (num / 1000).toFixed(1) + "k";
  }
  return `${prefix || ""}${num}${suffix || ""}`;
}
