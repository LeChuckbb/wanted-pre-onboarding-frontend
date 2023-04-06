import useTodo from "../hooks/useTodo";
import useTodoList from "../hooks/useTodoList";

const Todo = () => {
  const { todos, setTodos, handleCreateTodoSubmit, todoRef } = useTodo();

  return (
    <div className="Todo__container">
      <div>
        <form onSubmit={handleCreateTodoSubmit}>
          <input data-testid="new-todo-input" ref={todoRef} />
          <button data-testid="new-todo-add-button">추가</button>
        </form>
      </div>

      <div>
        <ul>
          {todos.map((todo) => (
            <TodoList
              todo={todo}
              key={todo.id}
              onDelete={() => {
                setTodos(todos.filter((t) => t.id !== todo.id));
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

// 1. TodoList 에서 여러개의 상태들을 만들어야 한다.
// 2. TodoList 상위 컴포넌트에 TodoList 상태를 이용한 이벤트 핸들러를 부착하고 싶다.

const TodoList = ({ todo, onDelete }) => {
  const {
    isChecked,
    handleCheckChange,
    MutateButtons,
    isEditMode,
    todoString,
    inputRef,
  } = useTodoList(onDelete, todo);

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckChange}
        />
        {isEditMode ? (
          <input
            defaultValue={todoString}
            data-testid="modify-input"
            ref={inputRef}
          />
        ) : (
          <span>{todoString}</span>
        )}
      </label>
      <MutateButtons />
    </li>
  );
};

export default Todo;
