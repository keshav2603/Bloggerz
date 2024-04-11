import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from './store/store.js';
import Home from "./pages/Home.jsx"
import Login  from './pages/Login.jsx';
import AuthLayouts from './components/AuthLayouts.jsx'
import Signup from './pages/Signup.jsx'; 
import AllPosts from './pages/AllPosts.jsx';
import AddPost from './pages/AddPost.jsx';
import EditPost from './pages/EditPost.jsx';
import Post from './pages/Post.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: (
          <AuthLayouts auththication={false}>
            <Login/>
          </AuthLayouts>
        )
      },
      {
        path: '/signup',
        element: (
          <AuthLayouts auththication={false}>
            <Signup/>
          </AuthLayouts>
        )
      },
      {
        path: '/all-posts',
        element: (
          <AuthLayouts auththication={true}>
            <AllPosts/>
          </AuthLayouts>
        )
      },
      {
        path: '/add-post',
        element: (
          <AuthLayouts auththication={true}>
            <AddPost/>
          </AuthLayouts>
        )
      },
      {
        path: '/edit-post',
        element: (
          <AuthLayouts auththication={true}>
            <EditPost/>
          </AuthLayouts>
        )
      },
      {
        path: '/post',
        element: (
          <AuthLayouts auththication={true}>
            <Post/>
          </AuthLayouts>
        )
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    < RouterProvider router={router}/>

    </Provider>
  </React.StrictMode>,
)
