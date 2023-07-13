import React from 'react'
import classnames from 'classnames/bind'

import styles from './styles.module.scss'
const cx = classnames.bind(styles)

interface StatusBarProps {
  color: 'gray' | 'red' | 'yellow' | 'green'
}

const StatusBar: React.FC<StatusBarProps> = ({ color }) => {
  return <div className={cx('status-bar', 'section', `section-${color}`)}></div>
}

export default StatusBar
