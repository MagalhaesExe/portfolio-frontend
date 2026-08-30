import { useState } from 'react'
import { sendContact } from '../services/api'

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (error) setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      await sendContact(formData)
      setSuccess(true)
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    success,
    error,
    reset: () => {
      setFormData({ name: '', email: '', message: '' })
      setError(null)
      setSuccess(false)
    },
  }
}
