import React from 'react';
import classnames from 'classnames/bind';
import styles from './Button.module.scss';


const cx = classnames.bind(styles)

export const Button = ({ children, onClick, disabled, active, className }) => {
  const onClickAction = event => disabled ? event.preventDefault() : onClick(event);  
  
  return (
    <button key={Button} className={cx('btn', className, {active})} onClick={onClickAction} disabled={disabled}>
      <span className={cx('text-in-btn')}>
        {children}
      </span>
    </button> 
  );
}



