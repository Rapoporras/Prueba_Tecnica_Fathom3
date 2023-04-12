import axios from "axios";

export const Api = axios.create({
  baseURL: "http://localhost:4000",

  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
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
