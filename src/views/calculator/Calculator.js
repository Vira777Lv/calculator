import React, { Component } from 'react';

import styles from './Calculator.css';

const mathTable = [
  ['c', '(', ')', '÷'],
  ['7', '8', '9' ,'×'],
  ['4', '5', '6', '+'],
  ['1', '2', '3', '-'],
  ['0', ',', '=']
];



class Calculator extends Component {

  onBtnClick(operand) {
    console.log(operand)
  }

  render() {
    return (
      <div className={styles.calculator}>
        <div className={styles.resultTable}>
          <input type="text" autoFocus={true} className={styles.math} pattern="/[0-9]/" />
          <span className={styles.answer}>0</span>
        </div>
        <div>
          {mathTable.map((row) => {
            let mutants = row.map((operand, index) => {
              return (
                <button
                  key={index}
                  className={styles.operands}
                  id={operand === '=' ? styles['pink'] : null}
                  onClick={this.onBtnClick}
                >
                  {operand}
                </button>
              )
            });
            return <div className={styles.rows}>{mutants}</div>
          })}
        </div>
      </div>
    )
  }
}

export default Calculator;
