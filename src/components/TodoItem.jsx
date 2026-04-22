const TodoItem = () => {
  return (
    <li className="todo__item todo-item">
      <input
        className="todo-item__checkbox"
        id="task-1"
        type="checkbox"
        checked
        readOnly
      />
      <label className="todo-item__lamel" htmlFor="task-1">
        Task 1
      </label>
      <button
        className="todo-item__delete-button"
        aria-label="Delete"
        title="Delete"
      >
        X
      </button>
    </li>
  );
};
export default TodoItem;
