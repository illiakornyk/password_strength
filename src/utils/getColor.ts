import { PasswordStrength } from 'utils/getPasswordStrength'
export type SectionColors = 'gray' | 'red' | 'yellow' | 'green'

const passwordStrengthColors: Record<PasswordStrength, SectionColors[]> = {
  empty: ['gray', 'gray', 'gray'],
  'too short': ['red', 'red', 'red'],
  easy: ['red', 'gray', 'gray'],
  medium: ['yellow', 'yellow', 'gray'],
  strong: ['green', 'green', 'green'],
}

export const getColors = (status: PasswordStrength): SectionColors[] => {
  return passwordStrengthColors[status]
}
