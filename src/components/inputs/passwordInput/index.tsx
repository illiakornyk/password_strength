import React, { useState } from 'react'
import classnames from 'classnames/bind'
import styles from './styles.module.scss'
import Input, { InputProps } from '../input'
import ClosedEyeIcon from '../../icons/closedEye'
import EyeIcon from '../../icons/eye'
const cx = classnames.bind(styles)

type PasswordInputProps = InputProps

const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [passwordVisible, setPasswordVisible] = useState(false)

  const handleToggleVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <div className={cx('password-input')}>
      <Input {...props} type={passwordVisible ? 'text' : 'password'} />
      {passwordVisible ? (
        <span className={cx('password-input', 'password-input__closed-eye-icon')}>
          <ClosedEyeIcon onClick={handleToggleVisibility} size='1.5rem' />
        </span>
      ) : (
        <span className={cx('password-input', 'password-input__eye-icon')}>
          <EyeIcon onClick={handleToggleVisibility} size='1.5rem' />
        </span>
      )}
    </div>
  )
}

export default PasswordInput
