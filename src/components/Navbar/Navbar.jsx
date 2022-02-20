import React, {useContext} from 'react'
import classnames from 'classnames/bind';
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { AuthContext } from '../../context';


const cx = classnames.bind(styles)

export const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className={cx('navbar')}>
      <Button children='Выйти' onClick={logout} />
      <div className={cx('navbar-links')}>
        <Link to={'/about'}>О сайте</Link>
        <Link to={'/post'}>Посты</Link>
      </div>
    </div>
  )
  
}
