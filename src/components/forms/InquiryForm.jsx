
import { useState } from 'react'
import FormInput from './FormInput'
import FormTextarea from './FormTextarea'
import FormButton from './FormButton'

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Handle inquiry form submission
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormInput
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <FormInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <FormInput
        label="Phone"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <FormInput
        label="Product of Interest"
        name="product"
        type="text"
        value={formData.product}
        onChange={handleChange}
      />
      <FormTextarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <FormButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
      </FormButton>
    </form>
  )
}

