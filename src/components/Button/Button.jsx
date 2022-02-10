import React from 'react';
import classnames from 'classnames/bind';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';


const cx = classnames.bind(styles)

export const Button = ({ children, onClick, disabled, active, className }) => {
  const onClickAction = e => disabled ? e.preventDefault() : onClick(e);  
  
  return (
    <button className={cx('btn', className, {active})} onClick={onClickAction} disabled={disabled}>
      <span className={cx('text-in-btn')}>
        {children}
      </span>
    </button> 
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  className:PropTypes.string
}

Button.defaultProps = {
  children: '',
  onClick: () => { },
  disabled: false,
  active: false,
  className: ''
}


