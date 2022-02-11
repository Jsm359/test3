import React, { useState, useRef, useEffect } from 'react'
import classnames from 'classnames/bind';
import styles from './Select.module.scss';

const cx = classnames.bind(styles)

export const Select = ({ className }) => {
  const selectRef = useRef(null)
  const [isOpen, setOpen] = useState(false)
  const [arr] = useState(['Profile', 'message', 'notification', 'help', 'setting'])
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
    </div>
  )
}
