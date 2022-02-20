import { About } from "../pages/About/About"
import { Post } from "../pages/Post/Post"
import { Error } from "../pages/Error/Error"
import { PostIdPage } from "../pages/Post/PostIdPage"
import { Login } from "../pages/Login/Login"
import { Navigate } from "react-router-dom"

export const privateRoutes = [
  {path: '/about', element: <About />},
  {path: '/post/*', element: <Post />},
  {path: '/error', element: <Error />},
  {path: '/post/:id/*', element: <PostIdPage />},
  {path: '*', element: <Navigate to='/post' />},
]

export const publicRoutes = [
  {path: '/login', element: <Login />},
  {path: '*', element: <Navigate to='/login' />},
]