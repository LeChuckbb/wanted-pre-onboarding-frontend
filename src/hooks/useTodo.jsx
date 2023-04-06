import { useState, useEffect, useRef } from "react";
import { getTodoAPI, createTodoAPI } from "../apis/todo";

function useTodo() {
  const [todos, setTodos] = useState([]);
  const todoRef = useRef(null);

  useEffect(() => {
    async function fetchTodo() {
      try {
        const res = await getTodoAPI();
        setTodos(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTodo();
  }, []);

  const handleCreateTodoSubmit = async (event) => {
    try {
      event.preventDefault();
      const body = {
        todo: todoRef.current.value,
      };
      const res = await createTodoAPI(body);
      setTodos([...todos, res.data]);
      todoRef.current.value = "";
    } catch (error) {
      console.error(error);
    }
  };

  return {
    todos,
    setTodos,
    handleCreateTodoSubmit,
    todoRef,
  };
}

export default useTodo;
