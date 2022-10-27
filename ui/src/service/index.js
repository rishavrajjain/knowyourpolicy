import { neoConnectAxiosClient } from "./httpClient";

export const login = async (email, password) => {
  const result = await neoConnectAxiosClient.post(`/user/login`, {
    email,
    password,
  });
  return result;
};

export const isUserLoggedIn = async () => {
  const encryptedJWT = localStorage.getItem("token");
  const result = await neoConnectAxiosClient.get(`/user/loggedIn`, {
    headers: {
      Authorization: `Bearer ${encryptedJWT}`,
    },
  });
  return result;
};

export const signup = async (
  name,
  email,
  password
) => {
  console.log({ name, email, password })
  const result = await neoConnectAxiosClient.post(
    `/user/signup`,
    {
      email,
      password,
      name,
    }
  );
  return result;
};







export const analyzePolicy = async (policy) => {
  const encryptedJWT = localStorage.getItem("token");
  const result = await neoConnectAxiosClient.post(
    `/analysis/policy`,
    {
      policy
    },
    {
      headers: {
        Authorization: `Bearer ${encryptedJWT}`,
      },
    }
  );
  return result;
};

export const getCategories = async (policy) => {
  const encryptedJWT = localStorage.getItem("token");
  const result = await neoConnectAxiosClient.post(
    `/analysis/category`,
    {
      policy
    },
    {
      headers: {
        Authorization: `Bearer ${encryptedJWT}`,
      },
    }
  );
  return result;
};

