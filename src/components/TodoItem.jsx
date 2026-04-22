const TodoItem = (props) => {
  const { className = "", id, title, isDone, onDeleteItem, onDone } = props;
  return (
    <li className={`todo-item ${className}`}>
      <input
        className="todo-item__checkbox"
        id={id}
        type="checkbox"
        checked={isDone}
        onChange={() => onDone(id)}
      />
      <label className="todo-item__label" htmlFor={id}>
        {title}
      </label>
      <button
        className="todo-item__delete-button"
        aria-label="Delete"
        title="Delete"
        onClick={() => onDeleteItem(id)}
      >
        X
      </button>
    </li>
  );
};
export default TodoItem;
