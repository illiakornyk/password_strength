import React, { useState } from 'react'
import './App.css'
import Input from './components/input'
import { PasswordStrength } from './utils/getPasswordStrength'

function App() {
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>('empty')

  return (
    <div className='App'>
      <header className='App-header'>
        <Input
          onChange={() => {
            console.log(11)
          }}
        />
        <p>Password strength is {}</p>
      </header>
    </div>
  )
}

export default App
