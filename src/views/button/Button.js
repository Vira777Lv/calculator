import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

class Button extends Component {
  handleBtnClick = () => {
    this.props.onClick(this.props.name)
  };
  render() {
    return (
      <button className={styles.operands} onClick={this.handleBtnClick}>
        {this.props.name}
      </button>
    )
  }
}

Button.propTypes = {
  name: PropTypes.string,
  purple: PropTypes.bool,
  grey: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
