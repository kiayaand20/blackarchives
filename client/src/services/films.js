import api from './apiConfig'

export const getFilms = async () => {
  try {
    const response = await api.get('/films/')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getFilm = async (id) => {
  try {
      const response = await api.get(`/films/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createFilms = async film => {
  try {
      const response = await api.post('/films/', film)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateFilms = async (id, film) => {
  try {
      const response = await api.put(`/film/${id}`, film)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteFilms = async id => {
  try {
      const response = await api.delete(`/films/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}