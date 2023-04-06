import axiosInstance from ".";

const SIGNUP_URL = "/auth/signup";
const SIGNIN_URL = "/auth/signin";

export const signupAPI = async (body) => {
  try {
    await axiosInstance.post(SIGNUP_URL, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "/signin";
  } catch (error) {
    console.error(error);
  }
};

export const signinAPI = (body) =>
  axiosInstance.post(SIGNIN_URL, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
