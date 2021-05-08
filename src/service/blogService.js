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


export const createUser = data => {
  return http.post("/api/blog/usuarios", data);
};



// "async" - determina que o metodo sera assincrono,
//não retorna nada imediatamente
//"await" - determina que o app espere uma resposta de uma determinada funcao,
// depende de retorno

//"Future - promises" determina que uma funcaoo vai retornar algo no futuro
//ou seja, levara um tempo para ser finalizado
