import React from 'react';
import { StandardButton } from '@all-in-one-nx/buttons';
import styles from './app.module.css';
import { getTestData } from './api/get-test-data';

const App = () => {
  const [data, setData] = React.useState('');
  const handleClick = () => {
    getTestData()
      .then((response) => {
        setData(JSON.stringify(response));
      })
      .catch((error) => {
        console.log('Get data error', error);
      });
  };
  return (
    <div className={styles.container}>
      <div>
        <StandardButton label="Load test data" onClick={handleClick} />
      </div>
      <p>{data}</p>
    </div>
  );
};

export default App;
