import React, { useState } from 'react'
import './App.css'
import Input from './components/input'
import { PasswordStrength, getPasswordStrength } from './utils/getPasswordStrength'
import StatusBar from './components/statusBars/statusBar'
import StatusBars from './components/statusBars'

function App() {
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>('empty')

  const handleInputChange = (value: string) => {
    const strength = getPasswordStrength(value)
    setPasswordStrength(strength)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <Input onChange={handleInputChange} />
        <StatusBars status={passwordStrength} />
        <p>Password strength is {passwordStrength}</p>
      </header>
    </div>
  )
}

export default App
