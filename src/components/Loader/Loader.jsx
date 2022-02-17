import React from 'react'
import classnames from 'classnames/bind';
import styles from './Loader.module.scss';

const cx = classnames.bind(styles)

export const Loader = () => {
  return (
    <div className={cx('Loader')}></div>
  )
}
