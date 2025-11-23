export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhone(phone) {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
}

export function validateRequired(value) {
  return value && value.trim().length > 0
}

export function validateForm(formData) {
  const errors = {}

  if (!validateRequired(formData.name)) {
    errors.name = 'Name is required'
  }

  if (!validateRequired(formData.email)) {
    errors.email = 'Email is required'
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (formData.phone && !validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number'
  }

  if (!validateRequired(formData.message)) {
    errors.message = 'Message is required'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

