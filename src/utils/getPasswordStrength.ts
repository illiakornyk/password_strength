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

export function getPasswordStrengthDescription(strength: PasswordStrength): string {
  switch (strength) {
    case 'empty':
      return 'Please enter a password'
    case 'too short':
      return 'Your password is too short'
    case 'easy':
      return 'Your password is easy to guess'
    case 'medium':
      return 'Your password is of medium strength'
    case 'strong':
      return 'Your password is strong'
  }
}
