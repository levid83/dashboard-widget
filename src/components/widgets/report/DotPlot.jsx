import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/DotPlot.module.css";
/**
 * Renders the dot plot chart for a given value in a given range
 *
 * @param {Object} props
 * @param {number} props.data raw report cell data
 * @param {number} props.minMax.min column data range minimum
 * @param {number} props.minMax.max column data range maximum
 * @returns
 */
function DotPlot(props) {
  const { data, minMax } = props;
  const { min, max } = minMax;

  const percentage = ((data - min) * 100) / (max - min);

  return (
    <div className={styles.plot}>
      {data != null && (
        <div
          className={styles.dot}
          style={{
            left: `calc(${percentage}% - 0.25em)`,
          }}
        ></div>
      )}
    </div>
  );
}

DotPlot.propTypes = {
  data: PropTypes.number,
  minMax: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
};

export default DotPlot;
