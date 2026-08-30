import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 5000,
})

export const sendContact = async (data) => {
  try {
    const response = await API.post('/contact', data)
    return response.data
  } catch (error) {
    if (error.response?.status === 422) {
      throw error.response.data.errors || { general: 'Validação falhou' }
    }
    throw { general: error.message || 'Erro ao enviar mensagem' }
  }
}

export default API
