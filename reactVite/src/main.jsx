import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import State1 from './useState/State1'

//react cannot understand this language 
// i.e. type, props, children

const reactElement =
{
  //type
  type: 'a',
  //properties
  props:
  {
    href: "https://google.com",
    target: '_blank'
  },
  //children
  children: 'Click on Me'
}



//make react language so that it understands what is inside reactElement

const areactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: "_blank"
  },
  'Click on Me'

  // Below not possible as it canot be evalutated -->
  // if(userName) === 'Neogi'?"Yes":"No"


)

const router = createBrowserRouter(
  [

    {

      path: '/',
      element: <App />,
    },
    {
      path: '/usestate',
      element: <State1 />
    }

  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
