import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'


const userName="shoaib";
const reactElement =React.createElement(
    'a',
    {href:'https://www.google.com',target:'_blank'},
    'click here'
    ,userName
)

createRoot(document.getElementById('root')).render(
    

    reactElement

)
