import { PasswordStrength } from './getPasswordStrength'
export type SectionColors = 'gray' | 'red' | 'yellow' | 'green'

export const getColors = (status: PasswordStrength): SectionColors[] => {
  switch (status) {
    case 'empty':
      return ['gray', 'gray', 'gray']
    case 'too short':
      return ['red', 'red', 'red']
    case 'easy':
      return ['red', 'gray', 'gray']
    case 'medium':
      return ['yellow', 'yellow', 'gray']
    case 'strong':
      return ['green', 'green', 'green']
  }
}
