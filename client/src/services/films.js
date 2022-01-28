import api from './apiConfig'

// export const getFilms = async () => {
//   try {
//     const response = await api.get('/directors/')
//       return response.data
//   } catch (error) {
//       throw error
//   }
// }

export const getFilms = async id => {
  try {
      const response = await api.get(`/directors/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createFilms = async film => {
  try {
      const response = await api.post('/directors/', film)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateFilms = async (id, film) => {
  try {
      const response = await api.put(`/directors/${id}`, film)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteFilms = async id => {
  try {
      const response = await api.delete(`/directors/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}