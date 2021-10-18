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
  const minMax = getColumnMinMax(data);

  if (config.isHidden || (!config.showPlot && !config.showValue)) return null;
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
  header: PropTypes.object.isRequired,
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  config: PropTypes.shape({
    showPlot: PropTypes.bool.isRequired,
    showValue: PropTypes.bool.isRequired,
    isHidden: PropTypes.bool.isRequired,
  }),
};

export default Column;
