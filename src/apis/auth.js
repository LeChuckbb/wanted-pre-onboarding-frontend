import axiosInstance from ".";

const SIGNUP_URL = "/auth/signup";
const SIGNIN_URL = "/auth/signin";

export const signupAPI = (body) =>
  axiosInstance.post(SIGNUP_URL, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const signinAPI = (body) =>
  axiosInstance.post(SIGNIN_URL, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
