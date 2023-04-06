import useTodo from "../hooks/useTodo";

function Todo() {
  const { todos, handleSubmit, todoRef } = useTodo();

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input data-testid="new-todo-input" ref={todoRef} />
          <button data-testid="new-todo-add-button">추가</button>
        </form>
      </div>

      <div>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" />
              <span>{todo.todo}</span>
            </label>
            <button data-testid="modify-button">수정</button>
            <button data-testid="delete-button">삭제</button>
          </li>
        ))}
      </div>
    </>
  );
}

export default Todo;
