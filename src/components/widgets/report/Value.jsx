import React from "react";
import PropTypes from "prop-types";

import styles from "./styles/Value.module.css";
/**
 * Renders the report's cell value
 *
 * @param {Object} props
 * @param {string} props.data formated report cell data
 * @returns
 */
function Value({ data }) {
  return <div className={styles.value}>{data}</div>;
}

Value.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Value;
