import api from './apiConfig'

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};

export const getDirectors = async () => {
  try {
    const response = await api.get('/directors/')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getDirector = async id => {
  try {
      const response = await api.get(`/directors/${id}/`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createDirector = async (director) => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };

    const response = await api.post('/directors/', director, headers)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateDirector = async (id, director) => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };
    const response = await api.put(`/directors/${id}/`, director, headers)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteDirector = async id => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };

    const response = await api.delete(`/directors/${id}/`, headers)
      return response.data
  } catch (error) {
      throw error
  }
}