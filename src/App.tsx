import { useState } from 'react'
import classnames from 'classnames/bind'

import {
  PasswordStrength,
  getPasswordStrength,
  getPasswordStrengthDescription,
} from 'utils/getPasswordStrength'
import StatusBars from 'components/statusBars'

import styles from './App.module.scss'
import EyeIcon from 'components/icons/eye'
import PasswordInput from 'components/inputs/passwordInput'
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
          <PasswordInput
            onChange={handleInputChange}
            label='password'
            type='password'
            name='password'
          />
          <StatusBars status={passwordStrength} />
          <p>{passwordStrengthDescription}</p>
          <EyeIcon />
        </div>
      </header>
    </div>
  )
}

export default App
