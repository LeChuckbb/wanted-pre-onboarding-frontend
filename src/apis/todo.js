import axiosInstance from ".";

export const createTodoAPI = (body) =>
  axiosInstance.post("/todos", body, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
      "Content-Type": "application/json",
    },
  });

export const getTodoAPI = () =>
  axiosInstance.get("/todos", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });

export const updateTodoAPI = (body) =>
  axiosInstance.put("/todos", body, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
      "Content-Type": "application/json",
    },
  });

export const deleteTodoAPI = () =>
  axiosInstance.delete("/todos", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
