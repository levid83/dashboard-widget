/**
 *  Format a number
 *
 * @param {number} value number to format
 * @param {number} decimals decimal precision of the number
 * @param {number} prefix prefix attached to the number
 * @param {number} suffix suffix attached to the number
 * @returns {string} formated number
 */
export function formatNumber(value, decimals, prefix, suffix) {
  if (value > 1000000) value = (value / 1000000).toFixed(1) + "m";
  if (value > 1000000000) value = (value / 1000000000).toFixed(1) + "b";
  else if (value > 1000) value = (value / 1000).toFixed(1) + "k";
  else if (decimals != null) {
    value = value.toFixed(decimals);
  }
  return `${prefix}${value}${suffix}`;
}
