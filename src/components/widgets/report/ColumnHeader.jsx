import React from "react";
import PropTypes from "prop-types";
import { convertToFixed, formatString } from "./utils/utils";

import styles from "./styles/ColumnHeader.module.css";
/**
 * Renders the header for a given column
 *
 * @param {Object} props
 * @param {Object} props.header colum format and meta data
 * @param {string} props.header.title column name
 * @param {string} props.header.prefix column data prefix
 * @param {string} props.header.suffix column data suffix
 * @param {number} props.header.number numeric precision of the column data
 * @param {number} props.minMax.min column data range minimm
 * @param {number} props.minMax.max column range maximum
 * @param {boolean} props.config.showPlot true if dot plot is shown, false otherwise
 * @param {boolean} props.config.showValue true if report value is shown, false otherwise
 * @param {boolean} props.config.isHidden  false if report column is shown, true otherwise
 * @returns
 */
function ColumnHeader(props) {
  const { header, minMax, config } = props;
  const { title, prefix, suffix } = header;
  const { showPlot, showValue } = config;

  const min = formatString(convertToFixed(minMax.min, 2), prefix, suffix);
  const max = formatString(convertToFixed(minMax.max, 2), prefix, suffix);

  return (
    <>
      <div className={styles.header}>{title}</div>
      <div className={styles.cell}>
        {showValue && <div className={styles.offset}></div>}
        {showPlot && (
          <div className={styles.range}>
            <div className={styles.rangeLeft}>{min}</div>
            <div className={styles.rangeRight}>{max}</div>
          </div>
        )}
      </div>
    </>
  );
}

ColumnHeader.propTypes = {
  header: PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    decimals: PropTypes.number,
  }).isRequired,
  minMax: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
  config: PropTypes.shape({
    showPlot: PropTypes.bool.isRequired,
    showValue: PropTypes.bool.isRequired,
    isHidden: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ColumnHeader;
