import http from './api.js';

const getAll = () => {
  return http.get("/contatos");
};

const get = id => {
  return http.get(`/api/post/${id}`);
};

const create = data => {
  return http.post("/cadastrar", data);
};

const update = (id, data) => {
  return http.put(`/contatos/${id}`, data);
};

const remove = id => {
  return http.delete(`/contatos/${id}`);
};


export default {
  getAll,
  get,
  create,
  update,
  remove
};