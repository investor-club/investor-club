import axios from "axios";

const signUpInvestor = (email, username, password, firstName, lastName) => {
  return axios
    .post("/api/auth/investors", {
      email,
      username,
      password,
      firstName,
      lastName,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

const signUpStartUp = (companyName, email, username, password) => {
  return axios
    .post("/api/auth/startups", {
      companyName,
      email,
      username,
      password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

const login = (username, password) => {
  return axios
    .post("/api/auth/login", { username, password })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

const logout = () => {
  return axios
    .delete("/api/auth/logout")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export { login, logout, signUpInvestor, signUpStartUp };
