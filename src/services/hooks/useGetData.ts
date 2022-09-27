import { api } from "../api";

export const useGetData = () => {
  const getAutores = async() => {
    try {
      const response = await api.get('/autores');
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  const getLivros = async() => {
    try {
      const response = await api.get('/livros');
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  return {
    getAutores,
    getLivros
  }
}