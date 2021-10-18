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

  return (
    <div className={styles.plot}>
      <div
        className={styles.dot}
        style={{
          left: `calc(${((data - min) * 100) / (max - min)}% - 0.25em)`,
        }}
      ></div>
    </div>
  );
}

DotPlot.propTypes = {
  data: PropTypes.number.isRequired,
  minMax: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }),
};

export default DotPlot;
