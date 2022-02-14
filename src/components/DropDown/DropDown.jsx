import React, { useState, useRef, useEffect } from 'react'
import classnames from 'classnames/bind';
import styles from './DropDown.module.scss';

const cx = classnames.bind(styles)

export const DropDown = ({ className }) => {
  const DropDownRef = useRef(null)
  const [isOpen, setOpen] = useState(false)
  const [arr] = useState(['Profile', 'message', 'notification', 'help', 'setting'])
  const onClickOpen = () => setOpen(!isOpen)

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (DropDownRef.current !== null && !DropDownRef.current.contains(e.target)) {
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
      <div className={cx('dropdown-wrap')}>
        <div className={cx('dropdown')} onClick={onClickOpen}>
          <div className={cx('header')}>dropdown</div>
          <div ref={DropDownRef} className={cx('dropdown-list', isOpen ? 'active' : '')}>
            <ul>
              {result}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
