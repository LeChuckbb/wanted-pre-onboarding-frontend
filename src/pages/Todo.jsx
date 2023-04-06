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

const TodoList = ({ todo, onDelete }) => {
  const { handleCheckChange, MutateButtons, todoStatus, inputRef } =
    useTodoList(onDelete, todo);

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todoStatus.isChecked}
          onChange={handleCheckChange}
        />
        {todoStatus.isEditMode ? (
          <input
            defaultValue={todoStatus.value}
            data-testid="modify-input"
            ref={inputRef}
          />
        ) : (
          <span>{todoStatus.value}</span>
        )}
      </label>
      <MutateButtons />
    </li>
  );
};

export default Todo;
