import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Store/Store.js'
import {AuthLayout , Login} from '../src/component/index.js'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import Home from './component/pages/Home.jsx'
import Signup from './component/pages/Signup.jsx'
import AllPosts from './component/pages/AllPosts.jsx'
import AddPost from './component/pages/AddPost.jsx'
import EditPost from './component/pages/Editpost.jsx'
import Post from '../src/component/pages/Post.jsx'


const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: '/login',
      element: (
        <AuthLayout authentication={false}>
          <div><Login /></div>
        </AuthLayout>
      )
    },
    {
      path: "/signup",
      element: (
        <AuthLayout authentication={false}>
          <Signup />
        </AuthLayout>
      ),
    },
    {
      path: "/all-post",
      element: (
        <AuthLayout authentication>
          {" "}
          <AllPosts />
        </AuthLayout>
      ),
    },
    {
      path: "/add-post",
      element: (
        <AuthLayout authentication>
          {" "}
          <AddPost />
        </AuthLayout>
      ),
    },
    {
      path: "/edit-post/:slug",
      element: (
        <AuthLayout authentication>
          {" "}
          <EditPost />
        </AuthLayout>
      ),
    },
    {
      path: "/post/:slug",
      element: <Post />,
    },
    
]
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />

    </Provider>

  </StrictMode>,
)
