import React from 'react';
import  Button from './components/Button';
import styles from './App.module.scss'
import classnames from 'classnames/bind';



const cx = classnames.bind(styles)

const App = () => {
  return (
    <div className={cx('App')}>
      <Button children='Кнопка' disabled />
      <Button children='Кнопка' active />
    </div>
  );
}

export default App

