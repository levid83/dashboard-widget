import React from "react";
import PropTypes from "prop-types";

import styles from "./styles/RowHeader.module.css";
import { deepCompare } from "./utils/utils";
/**
 * Renders the report's row header
 *
 * @param {Object} props
 * @param {Object[]} props.data Meta data for report rows
 * @param {string} props.data[].title row title
 * @returns
 */
function RowHeader({ data }) {
  return data.map((meta, idx) => (
    <div className={styles.meta} key={idx} style={{ gridRowStart: idx + 3 }}>
      {meta.title}
    </div>
  ));
}

RowHeader.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default React.memo(RowHeader, deepCompare);
