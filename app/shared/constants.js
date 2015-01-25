angular.module('SmartschoolApp').constant('constants',{
  authTokenKey: 'X-Auth-Token',
  usernameKey: 'username',
  status: {
      WARNING: "warning",
      SUCCESS: "success",
      DANGER: "danger",
      INFO: "info",
      LOADING: "loading"
  },
  message:{
      NOT_LOADED: "Não carregado",
      LOADING: "Carregando registros",
      ERROR: "Erro ao carregar registros",
      LOGIN_ERROR: "Usuário ou senha inválido",
      EMPTY:"Nenhum registro encontrado",
      CONNECTION_ERROR: "Não foi possível conectar-se ao servidor",
      REGISTRY_SAVED: "Registro salvo com sucesso!",
      REGISTRY_UPDATED: "Registro atualizado com sucesso!",
      REGISTRY_DELETED: "Registro apagado com sucesso!",
  },
  table:{
      FIRST_PAGE: 1,
      COUNTS_PER_PAGE: 10,
      SORTING: 'desc'
  }
});
