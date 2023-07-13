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
