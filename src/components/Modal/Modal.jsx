import React from 'react';
import classnames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classnames.bind(styles)

export const Modal = ({children, open, setOpen}) => {
  return (
    <div className={cx('Modal', open ? 'active' : '')} onClick={() => setOpen(false)}>
      <div className={cx('Modal-content')} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}


