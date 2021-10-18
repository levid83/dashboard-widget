import React from "react";
import PropTypes from "prop-types";

import Value from "./Value";
import DotPlot from "./DotPlot";

import { formatNumber } from "./utils/utils";

import styles from "./styles/Cell.module.css";

/**
 * Renders the data for a given report cell
 *
 * @param {Object} props
 * @param {Object} props.data report cell data
 * @param {Object} props.format  cell data format
 * @param {string} props.format.prefix cell data prefix
 * @param {string} props.format.suffix cell data suffix
 * @param {number} props.format.number numeric precision of the cell data
 * @param {boolean} props.cellConfig.showPlot true if dot plot is shown, false otherwise
 * @param {boolean} props.cellConfig.showValue true if report value is shown, false otherwise
 * @param {boolean} props.cellConfig.isHidden  false if report column is shown, true otherwise
 * @param {number} props.minMax.min column data range minimm
 * @param {number} props.minMax.max column range maximum
 * @returns
 */
function Cell(props) {
  const { data, format, cellConfig, minMax } = props;
  const { decimals, prefix, suffix } = format;
  const { showPlot, showValue } = cellConfig;

  return (
    <div className={styles.cell}>
      {showValue && (
        <Value data={formatNumber(data.v, decimals, prefix, suffix)} />
      )}
      {showPlot && <DotPlot data={data.v} minMax={minMax} />}
    </div>
  );
}

Cell.propTypes = {
  data: PropTypes.shape({ v: PropTypes.number.isRequired }).isRequired,
  format: PropTypes.shape({
    prefix: PropTypes.string.isRequired,
    suffix: PropTypes.string.isRequired,
    decimals: PropTypes.number.isRequired,
  }).isRequired,
  cellConfig: PropTypes.shape({
    showPlot: PropTypes.bool.isRequired,
    showValue: PropTypes.bool.isRequired,
    isHidden: PropTypes.bool.isRequired,
  }).isRequired,
  minMax: PropTypes.object.isRequired,
};

export default Cell;
