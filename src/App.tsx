import React, { useState } from 'react'
import Input from './components/input'
import { PasswordStrength, getPasswordStrength } from './utils/getPasswordStrength'
import StatusBars from './components/statusBars'

import classnames from 'classnames/bind'

import styles from './App.module.scss'
const cx = classnames.bind(styles)

function App() {
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>('empty')

  const handleInputChange = (value: string) => {
    const strength = getPasswordStrength(value)
    setPasswordStrength(strength)
  }

  return (
    <div className={cx('App')}>
      <header className={cx('App-header')}>
        <div className={cx('container')}>
          <Input onChange={handleInputChange} label='password' type='password' name='password' />
          <StatusBars status={passwordStrength} />
          <p>Password strength is {passwordStrength}</p>
        </div>
      </header>
    </div>
  )
}

export default App
