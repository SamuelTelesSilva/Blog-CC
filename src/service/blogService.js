import http from './api.js';

/**
 * Parametro para definir o limite retornado pela API
 * @param {*} limit 
 * Parametro para definir qual a pagina atual da API
 * @param {*} paginaAtual 
 * @returns 
 */
export const getAll = (limit, paginaAtual) => {
  return http.get(`/api/post?size=${limit}&page=${paginaAtual}`);
};

export const getById = id => {
  return http.get(`/api/post/${id}`);
};


export const create = data => {
  return http.post("/api/post", data);
};

/*
const update = (id, data) => {
  return http.put(`/contatos/${id}`, data);
};

const remove = id => {
  return http.delete(`/contatos/${id}`);
};
*/


/*
const blogService = {
  getAll,
  get,
  create
};

export default blogService;

*/