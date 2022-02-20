import React, {useContext} from 'react'
import { Button } from '../../components/Button/Button'
import { Input } from '../../components/Input/Input'
import { AuthContext } from '../../context'

export const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const login = e => {
    e.preventDefault();
    setIsAuth(true)
    localStorage.setItem('auth', true)
  }

  return (
    <div>
      <h1>Авторизация</h1>
      <form onSubmit={login}>
        <Input type="text" placeholder="Введите логин" />
        <Input type="password" placeholder="Введите пароль" />
        <Button children="Войти" />
      </form>
    </div>
  )
}
