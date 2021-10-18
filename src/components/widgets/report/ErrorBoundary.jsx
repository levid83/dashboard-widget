import React from "react";

import styles from "./styles/ErrorBoundary.module.css";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {}

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.error}>
          Something went wrong. Unable to render the content.
        </div>
      );
    }
    return this.props.children;
  }
}
