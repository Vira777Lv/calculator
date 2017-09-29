import React, { Component } from 'react';

import Display from '../display/Display';
import Keyboard from '../keyboard/Keyboard';

import styles from './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      prev: null,
      next: null,
      operation: null,
    };
  }

  handleBtnClick = (btnName) => {
    console.log(btnName)
  };
  render() {
    return (
      <div className={styles.calculator}>
       <Display value={this.state.next || this.state.result || '0'}/>
        <Keyboard onClick={this.handleBtnClick} />
      </div>
    )
  }
}

export default Calculator;
