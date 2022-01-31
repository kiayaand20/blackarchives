import api from './apiConfig'

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};

export const getFilms = async () => {
  try {
    const response = await api.get('/films/')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getFilm = async id => {
  try {
      const response = await api.get(`/films/${id}/`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createFilms = async film => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };

    const response = await api.post('/films/', film, headers)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateFilms = async (id, film) => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };

    const response = await api.put(`/films/${id}/`, film, headers)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteFilms = async id => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };

    const response = await api.delete(`/films/${id}/`, headers)
      return response.data
  } catch (error) {
      throw error
  }
}