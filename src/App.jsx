import React from 'react';
import { Button } from './components/Button/Button';
import { Select } from './components/Select/Select';
import styles from './App.module.scss'
import classnames from 'classnames/bind';



const cx = classnames.bind(styles)

export const App = () => {
  return (
    <div className={cx('App')}>
      {/* <Button className={cx('btn-log')} children='Кнопка' active /> */}
      <Select placeholder='Добавить элемент' />
    </div>
  );
}



