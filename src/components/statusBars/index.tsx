import React from 'react'
import classnames from 'classnames/bind'

import styles from './styles.module.scss'
import { PasswordStrength } from 'utils/getPasswordStrength'
import StatusBar from 'components/statusBars/statusBar'
import { getColors } from 'utils/getColor'
const cx = classnames.bind(styles)

interface StatusBarsProps {
  status: PasswordStrength
}
const StatusBars: React.FC<StatusBarsProps> = ({ status }) => {
  const colors = getColors(status)

  return (
    <div className={cx('status-bars')}>
      {colors.map((color, index) => (
        <StatusBar key={index} color={color} />
      ))}
    </div>
  )
}

export default StatusBars
