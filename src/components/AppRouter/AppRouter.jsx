import React, {useContext} from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../../router'
import { AuthContext } from '../../context'
import { Loader } from '../Loader/Loader'

export const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)
  console.log(isAuth);

  if (isLoading) {
    return <Loader />
  }

  return (
    isAuth
      ? 
      <Routes>
        {privateRoutes.map(route =>
          <Route key={route} element={route.element} path={route.path} />
        )}
      </Routes>

      :
       <Routes>
        {publicRoutes.map(route =>
          <Route key={route} element={route.element} path={route.path} />
        )}
      </Routes>

  )
}
