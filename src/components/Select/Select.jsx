import React, { useState, useRef,useEffect } from 'react'
import classnames from 'classnames/bind';
import styles from './Select.module.scss';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';

const cx = classnames.bind(styles)

export const Select = ({ placeholder, className }) => {
  const selectRef = useRef(null)
  const [isOpen, setOpen] = useState(false)
  const [arr, setArr] = useState(['Profile', 'message', 'notification', 'help', 'setting'])
  const [value, setValue] = useState('')

  const onClickOpen = () => setOpen(!isOpen)

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (selectRef.current !== null && !selectRef.current.contains(e.target)) {
        setOpen(!isOpen);
      }
    };
  
    if (isOpen) {
      window.addEventListener('click', pageClickEvent);
    }
  
    return () => {
      window.removeEventListener('click', pageClickEvent);
    }
  
  }, [isOpen])

  const result = arr.map((element, index) => {
    return <li key={index}><a href='#' className={cx('element')} key={index}>{element}</a></li>
  })

  const add = () => {
    setArr([...arr, value])
  }

  const remove = (index) => {
    setArr([...arr.slice(index, 1)])
  }

  return (
    <div>
      <div className={cx('select-wrap')}>
        <div className={cx('select')} onClick={onClickOpen}>
          <div className={cx('header')}>select</div>
          <div ref={selectRef} className={cx('select-list', isOpen ? 'active' : '')}>
            <ul>
              {result}
            </ul>
          </div>
        </div>
      </div>
      <input className={cx('select-list-add'), className} placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)} />
      <Button className={cx('btn-add','btns')} children='Добавить' onClick={add}  />
      <Button className={cx('btn-remove','btns')} children='Удалить' onClick={remove}  />
    </div>
  )
}

Select.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string
}

Select.defaultProps = {
  onChange: () => { },
  onClick: () => { },
  placeholder: '',
  className: ''
}