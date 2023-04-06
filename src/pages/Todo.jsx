import useTodo from "../hooks/useTodo";
import { useState, useRef } from "react";
import { updateTodoAPI, deleteTodoAPI } from "../apis/todo";

function Todo() {
  const {
    todos,
    setTodos,
    handleCreateTodoSubmit,
    todoRef,
    handleOnChangeCheckbox,
    handleOnClick,
  } = useTodo();

  return (
    <>
      <div>
        <form onSubmit={handleCreateTodoSubmit}>
          <input data-testid="new-todo-input" ref={todoRef} />
          <button data-testid="new-todo-add-button">추가</button>
        </form>
      </div>

      <div onChange={handleOnChangeCheckbox} onClick={handleOnClick}>
        {todos.map((todo) => (
          <TodoList
            todo={todo}
            key={todo.id}
            setTodos={setTodos}
            onDelete={() => {
              setTodos(todos.filter((t) => t.id !== todo.id));
            }}
          />
        ))}
      </div>
    </>
  );
}

const TodoList = ({ todo, onDelete }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [todoString, setTodoString] = useState(todo.todo);
  const [isChecked, setIsChecked] = useState(todo.isCompleted);
  const inputRef = useRef(null);

  const handleSubmitUpdate = async () => {
    const body = {
      todo: todoString,
      isCompleted: isChecked,
    };
    await updateTodoAPI(todo.id, body);
    setIsEditMode(false);
    setTodoString(inputRef.current.value);
  };

  const handleCheckUpdate = async () => {
    const body = {
      todo: todoString,
      isCompleted: !isChecked,
    };
    await updateTodoAPI(todo.id, body);
    setIsChecked(!isChecked);
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setTodoString(todo.todo);
  };

  const handleDelete = async () => {
    await deleteTodoAPI(todo.id);
    onDelete();
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckUpdate}
        />
        {isEditMode ? (
          <input
            data-testid="modify-input"
            ref={inputRef}
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
        ) : (
          <span>{todoString}</span>
        )}
      </label>
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
          <button
            data-testid="modify-button"
            onClick={() => setIsEditMode(true)}
          >
            수정
          </button>
          <button data-testid="delete-button" onClick={handleDelete}>
            삭제
          </button>
        </>
      )}
    </li>
  );
};

export default Todo;
