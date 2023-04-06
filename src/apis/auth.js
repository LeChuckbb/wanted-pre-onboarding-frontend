import axiosInstance from ".";

const SIGNUP_URL = "/auth/signup";
const SIGNIN_URL = "/auth/signin";

export const signupAPI = async (body) => {
  try {
    await axiosInstance.post(SIGNUP_URL, body);
    window.location.href = "/signin";
  } catch (error) {
    console.error(error);
  }
};

export const signinAPI = async (body) => {
  try {
    const res = await axiosInstance.post(SIGNIN_URL, body);
    localStorage.setItem("accessToken", res.data.access_token);
    window.location.href = "/todo";
    return res;
  } catch (error) {
    console.error(error);
  }
};
