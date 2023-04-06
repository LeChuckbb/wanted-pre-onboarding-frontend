import axiosInstance from ".";

export const createTodo = (body) =>
  axiosInstance.post("/todos", body, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  });

export const getTodo = () =>
  axiosInstance.get("/todos", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

export const updateTodo = (body) =>
  axiosInstance.put("/todos", body, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  });

export const deleteTodo = () =>
  axiosInstance.delete("/todos", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
