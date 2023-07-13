import React, { useState } from 'react'

interface InputProps {
  placeholder?: string
  onChange: (value: string) => void
}

const Input: React.FC<InputProps> = ({ placeholder, onChange }) => {
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    onChange(event.target.value)
  }

  return (
    <div>
      <input type='text' value={value} onChange={handleChange} placeholder={placeholder} />
    </div>
  )
}

export default Input
