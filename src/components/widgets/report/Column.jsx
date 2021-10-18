import React from "react";
import PropTypes from "prop-types";

import ColumnHeader from "./ColumnHeader";
import Cell from "./Cell";

/**
 * Get the min and max values of a report column
 *
 * @param {Object[]} data report column data array
 * @returns {Object} min and max values
 *
 */
function getColumnMinMax(data) {
  const arr = data.map((data) => data.v).filter((val) => val != null);
  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
  };
}

/**
 * Renders a report column
 *
 * @param {Object} props
 * @param {Object} props.header colum meta data and cell data format
 * @param {string} props.header.title column name
 * @param {string} props.header.prefix cell data prefix
 * @param {string} props.header.suffix cell data suffix
 * @param {number} props.header.number numeric precision of the cell data
 * @param {Object[]} props.data report column data array
 * @param {boolean} props.config.showPlot true if dot plot is shown, false otherwise
 * @param {boolean} props.config.showValue true if report value is shown, false otherwise
 * @param {boolean} props.config.isHidden  false if report column is shown, true otherwise
 * @returns
 */
function Column({ header, data, config }) {
  let { showPlot = true, showValue = true, isHidden = false } = config;

  if (showPlot === null) showPlot = true;
  if (showValue === null) showValue = true;

  const minMax = getColumnMinMax(data);

  if (isHidden || (!showPlot && !showValue)) return null;
  return (
    <>
      <ColumnHeader header={header} minMax={minMax} config={config} />
      {data.map((d, idx) => (
        <Cell
          data={d}
          format={header}
          cellConfig={config}
          minMax={minMax}
          key={idx}
        />
      ))}
    </>
  );
}

Column.propTypes = {
  header: PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    decimals: PropTypes.number,
  }).isRequired,
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  config: PropTypes.shape({
    key: PropTypes.string.isRequired,
    showPlot: PropTypes.bool,
    showValue: PropTypes.bool,
    isHidden: PropTypes.bool,
  }).isRequired,
};

export default Column;
