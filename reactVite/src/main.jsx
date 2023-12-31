import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


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


ReactDOM.createRoot(document.getElementById('root')).render(

  <App />

)
