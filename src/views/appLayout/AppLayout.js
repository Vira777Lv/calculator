import React from 'react';

import Calculator from '../calculator/Calculator';
import styles from './AppLayout.css';

const AppLayout = () => {
  return (
    <div className={styles.container}>
      <Calculator />
    </div>
  )
};

export default AppLayout;
