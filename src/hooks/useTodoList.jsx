import { useState, useRef } from "react";
import { updateTodoAPI, deleteTodoAPI } from "../apis/todo";

const useTodoList = (onDelete, todo) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [todoString, setTodoString] = useState(todo.todo);
  const [isChecked, setIsChecked] = useState(todo.isCompleted);
  const inputRef = useRef(null);

  const handleSubmitUpdate = async () => {
    const body = {
      todo: inputRef.current.value,
      isCompleted: isChecked,
    };
    await updateTodoAPI(todo.id, body);
    setIsEditMode(false);
    setTodoString(inputRef.current.value);
  };

  const handleCancel = () => {
    setIsEditMode(false);
  };

  const handleModify = () => {
    setIsEditMode(true);
  };

  const handleDelete = async () => {
    await deleteTodoAPI(todo.id);
    onDelete();
  };

  const handleCheckChange = async () => {
    const body = {
      todo: todoString,
      isCompleted: !isChecked,
    };
    await updateTodoAPI(todo.id, body);
    setIsChecked(!isChecked);
  };

  const MutateButtons = () => {
    return (
      <>
        {isEditMode ? (
          <>
            <button data-testid="submit-button" onClick={handleSubmitUpdate}>
              제출
            </button>
            <button data-testid="cancel-button" onClick={handleCancel}>
              취소
            </button>
          </>
        ) : (
          <>
            <button data-testid="modify-button" onClick={handleModify}>
              수정
            </button>
            <button data-testid="delete-button" onClick={handleDelete}>
              삭제
            </button>
          </>
        )}
      </>
    );
  };

  return {
    isChecked,
    MutateButtons,
    isEditMode,
    todoString,
    handleCheckChange,
    inputRef,
  };
};

export default useTodoList;
