import React from 'react';
import { Post } from './Post/Post';
import styles from './App.module.scss'
import classnames from 'classnames/bind';


const cx = classnames.bind(styles)

export const App = () => {
  return (
    <div className={cx('App')}>
      <Post />
    </div>
  );
}



