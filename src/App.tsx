import { useState } from 'react'
import classnames from 'classnames/bind'

import Input from './components/input'
import {
  PasswordStrength,
  getPasswordStrength,
  getPasswordStrengthDescription,
} from './utils/getPasswordStrength'
import StatusBars from './components/statusBars'

import styles from './App.module.scss'
const cx = classnames.bind(styles)

function App() {
  const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>('empty')

  const handleInputChange = (value: string) => {
    const strength = getPasswordStrength(value)
    setPasswordStrength(strength)
  }

  const passwordStrengthDescription = getPasswordStrengthDescription(passwordStrength)

  return (
    <div className={cx('App')}>
      <header className={cx('App-header')}>
        <div className={cx('container')}>
          <Input onChange={handleInputChange} label='password' type='password' name='password' />
          <StatusBars status={passwordStrength} />
          <p>{passwordStrengthDescription}</p>
        </div>
      </header>
    </div>
  )
}

export default App
