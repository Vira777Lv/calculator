import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';

import styles from './Keyboard.css';

class Keyboard extends Component {
  handleBtnClick = (btnName) => {
    this.props.onClick(btnName)
  };

  render() {
    return (
      <div className={styles.rows}>
        <Button name="AC" onClick={this.handleBtnClick} />
        <Button name="(" onClick={this.handleBtnClick} />
        <Button name=")" onClick={this.handleBtnClick} />
        <Button name="÷" onClick={this.handleBtnClick} />
        <Button name="7" onClick={this.handleBtnClick} />
        <Button name="8" onClick={this.handleBtnClick} />
        <Button name="9" onClick={this.handleBtnClick} />
        <Button name="×" onClick={this.handleBtnClick} />
        <Button name="4" onClick={this.handleBtnClick} />
        <Button name="5" onClick={this.handleBtnClick} />
        <Button name="6" onClick={this.handleBtnClick} />
        <Button name="+" onClick={this.handleBtnClick} />
        <Button name="1" onClick={this.handleBtnClick} />
        <Button name="2" onClick={this.handleBtnClick} />
        <Button name="3" onClick={this.handleBtnClick} />
        <Button name="-" onClick={this.handleBtnClick} />
        <Button name="0" onClick={this.handleBtnClick} />
        <Button name="," onClick={this.handleBtnClick} />
        <Button name="=" onClick={this.handleBtnClick} />
      </div>
    )
  }
}

Keyboard.propTypes = {
  onClick: PropTypes.func,
  purple: PropTypes.bool,
};

export default Keyboard;
