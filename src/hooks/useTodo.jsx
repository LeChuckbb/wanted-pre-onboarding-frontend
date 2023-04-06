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
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnClick = async (event) => {
    try {
      const key = event?.target?.dataset?.testid;
      switch (key) {
        case "modify-button":
          console.log("수정 버튼 클릭");
          break;
        case "delete-button":
          console.log("삭제 버튼 클릭");
          break;
        case "cancel-button":
          console.log("취소 버튼 클릭");
          break;
        default:
          break;
      }
    } catch (error) {}
  };

  const handleOnChangeCheckbox = async (event) => {
    try {
      console.log("ON CHANGE");
      console.log(event);
      console.log(event.target);
    } catch (error) {}
  };

  return {
    todos,
    handleCreateTodoSubmit,
    todoRef,
    handleOnChangeCheckbox,
    handleOnClick,
  };
}

export default useTodo;
