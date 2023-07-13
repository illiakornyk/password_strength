import React, { useState } from 'react'
import classnames from 'classnames/bind'
import styles from './styles.module.scss'
const cx = classnames.bind(styles)

interface InputProps {
  placeholder?: string
  label?: string
  required?: boolean
  type?: React.InputHTMLAttributes<HTMLInputElement>['type']

  name: string

  onChange: (value: string) => void
}

const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  required = false,
  onChange,
  name,
  type = 'text',
}) => {
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    onChange(event.target.value)
  }

  return (
    <div className={cx('input-container')}>
      <input
        type={type}
        className={cx('input')}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        name={name}
      />
      {label ? <label htmlFor={name}>{label}</label> : null}
    </div>
  )
}

export default Input
