import React from 'react'
import classnames from 'classnames/bind'

import styles from './styles.module.scss'
import { SectionColors } from '../../../utils/getColor'
const cx = classnames.bind(styles)

interface StatusBarProps {
  color: SectionColors
}

const StatusBar: React.FC<StatusBarProps> = ({ color }) => {
  return <div className={cx('status-bar', 'section', `section-${color}`)}></div>
}

export default StatusBar
