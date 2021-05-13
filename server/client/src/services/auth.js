import axios from "axios";

const signUpInvestor = (email, username, password, firstName, lastName) => {
  return axios
    .post("/api/auth/signup/investor", {
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
    .post("/api/auth/signup/startup", {
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

export { login, signUpInvestor, signUpStartUp };
