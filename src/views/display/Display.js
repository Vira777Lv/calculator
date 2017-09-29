import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Display.css';

class Display extends Component {
  render() {
    return (
      <div className={styles.resultTable}>
        <input
          type="text"
          autoFocus={true}
          className={styles.math}
        />
        <span className={styles.answer}>
            {this.props.value}
        </span>
      </div>
    )
  }
}

Display.propTypes = {
  value: PropTypes.string,
};

export default Display;
