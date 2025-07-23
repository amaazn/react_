import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.jsx'

function Myapp(){
    return (
        <div>
        <h1> ooo paji custom</h1>
        </div>
    )
}

// const ReactElement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'click me to visit google'
// }

const anotherElement=(
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser="chai aur react"

const reactElement = React.createElement(
      'a',
      {href: 'https://google.com' ,target:'_blank' },
      'click me to visit google',
       anotherUser//evaluatef=d expression variable inject
)

createRoot(document.getElementById('root')).render(
 
    //<App />
    
//   anotherElement
     reactElement

)
