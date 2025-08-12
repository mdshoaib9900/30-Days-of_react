import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {

  return (
    <div>
      <Card Name="Shoaib" Title="wakanda forevr" Details="hi this is shoaib reporting"/>
      <Card Name="Saif" Title="dukan forevr" Details="hi this is saif reporting"/>
    </div>
  )
}

export default App
