import React from "react";
import PropTypes from "prop-types";

import ErrorBoundary from "./ErrorBoundary";

import RowHeader from "./RowHeader";
import Column from "./Column";

import styles from "./styles/Report.module.css";
import { deepCompare } from "./utils/utils";

function getColumnData(data, idx) {
  return data.map((row) => row[idx]);
}

function getColumnConfig(colConfig, id) {
  return colConfig.find((conf) => conf.key === id);
}

function renderDataColumns(headers, data, colConfig) {
  return headers
    .slice(1)
    .map((header, idx) => (
      <Column
        header={header}
        data={getColumnData(data, idx)}
        config={getColumnConfig(colConfig, header.key)}
        key={header.key}
      />
    ));
}
/**
 * Renders the report
 *
 * @param {Object} props
 * @param {Object} props.data.data.query  Report query result
 * @param {Object[]} props.data.data.query.headers Column meta data
 * @param {Object[]} props.data.data.query.meta Row meta data
 * @param {Object[]} props.data.data.query.data Report data
 * @param {Array} props.colConfig Configuration array for report columns
 */
function Report(props) {
  const { headers, meta, data } = props.data.data.query;
  const { colConfig } = props;

  return (
    <div className={styles.report}>
      <RowHeader data={meta} />
      {renderDataColumns(headers, data, colConfig)}
    </div>
  );
}

/**
 * Report Component
 *
 * @param {Object} props
 * @param {Object} props.data.data.query  Report query result
 * @param {Object[]} props.data.data.query.headers Column meta data
 * @param {Object[]} props.data.data.query.meta Row meta data
 * @param {Object[]} props.data.data.query.data Report data
 * @param {Array} props.colConfig Configuration array for report columns
 *
 */
function ReportWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Report {...props} />
    </ErrorBoundary>
  );
}

ReportWithErrorBoundary.propTypes = {
  /**
   * Input data wrapper object
   */
  data: PropTypes.shape({
    /**
     * Input data wrapper object
     */
    data: PropTypes.shape({
      /**
       * Query result object
       */
      query: PropTypes.shape({
        /**
         * Metadata for report columns
         */
        headers: PropTypes.arrayOf(
          PropTypes.shape({ key: PropTypes.string.isRequired }).isRequired
        ).isRequired,
        /**
         * Matadata for report rows
         */
        meta: PropTypes.array.isRequired,
        /**
         * Array for report data
         */
        data: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  /**
   * Configuration array for report columns
   */
  colConfig: PropTypes.arrayOf(
    PropTypes.shape({ key: PropTypes.string.isRequired })
  ).isRequired,
};

ReportWithErrorBoundary.displayName = "Report";

export default React.memo(ReportWithErrorBoundary, deepCompare);
