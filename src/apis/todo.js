import axiosInstance from ".";

export const createTodoAPI = (body) => axiosInstance.post("/todos", body);

export const getTodoAPI = () => axiosInstance.get("/todos");

export const updateTodoAPI = (id, body) =>
  axiosInstance.put(`/todos/${id}`, body);

export const deleteTodoAPI = (id) => axiosInstance.delete(`/todos/${id}`);
