import api from './apiConfig'

export const getDirectors = async () => {
  try {
    const response = await api.get('/directors/')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getDirector = async (id) => {
  try {
      const response = await api.get(`/directors/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createDirector = async (director) => {
  try {
      const response = await api.post('/directors/', director)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateDirector = async (id, director) => {
  try {
      const response = await api.put(`/directors/${id}`, director)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteDirector = async id => {
  try {
      const response = await api.delete(`/directors/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}