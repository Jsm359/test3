import React from 'react'
import classnames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classnames.bind(styles)

export const Input = (props,className) => {
  return (
      <input type="text" className={cx('input')} {...props} />
  )
}
