import React from 'react'
import classnames from 'classnames/bind'
import styles from './styles.module.scss'
const cx = classnames.bind(styles)

export interface InputProps {
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
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div className={cx('input-container')}>
      <input
        type={type}
        className={cx('input')}
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
