import axios from "axios";

export const Api = axios.create({
  // baseURL: "https://lgfm-backend-proxy.de-c1.cloudhub.io",
  // baseURL: "https://lgfm-backend-proxy-sandbox.de-c1.cloudhub.io",
  baseURL: "http://localhost:4000",
  //   baseURL: "https://pre.delivery-platf.lgfm.app/",

  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
});

export const doLogin = (email, password) => {
  return Api({
    method: "post",
    url: "/login",
    data: {
      email: email,
      password: password,
    },
  });
};
export const createUser = (name, email, password) => {
  return Api({
    method: "post",
    url: "/users",
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
};

export const updateUser = (id, name, email, password) => {
  return Api({
    method: "put",
    url: "/users/" + id,
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
};
export const getJokeRandom = (email, password) => {
  return Api({
    method: "get",
    url: "/jokes_random",
  });
};
