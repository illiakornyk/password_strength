export type PasswordStrength = 'empty' | 'too short' | 'easy' | 'medium' | 'strong'

export function getPasswordStrength(value: string): PasswordStrength {
  if (value.length === 0) {
    return 'empty'
  } else if (value.length < 8) {
    return 'too short'
  } else if (/^[a-zA-Z]+$/.test(value) || /^\d+$/.test(value) || /^[^a-zA-Z\d]+$/.test(value)) {
    return 'easy'
  } else if (/[a-zA-Z]/.test(value) && /\d/.test(value) && /[^a-zA-Z\d]/.test(value)) {
    return 'strong'
  } else {
    return 'medium'
  }
}

const passwordStrengthDescriptions: Record<PasswordStrength, string> = {
  empty: 'Please enter a password',
  'too short': 'Your password is too short',
  easy: 'Your password is easy to guess',
  medium: 'Your password is of medium strength',
  strong: 'Your password is strong',
}

export function getPasswordStrengthDescription(strength: PasswordStrength): string {
  return passwordStrengthDescriptions[strength]
}
