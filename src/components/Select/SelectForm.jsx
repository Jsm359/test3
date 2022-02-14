import React from 'react';
import classnames from 'classnames/bind';
import styles from './Select.module.scss';

const cx = classnames.bind(styles)

export const SelectForm = ({options, className, defaultValue, value, onChange}) => {
  return (
    <select className={cx('select-wrap',className)} value={value} onChange={e => onChange(e.target.value)}>
      <option disabled value="">{defaultValue}</option>
      {options.map(option => 
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      )}
    </select>
  );
}
