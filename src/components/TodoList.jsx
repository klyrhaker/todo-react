import TodoItem from "./TodoItem";

const TodoList = ({ tasks, onDeleteItem, onDone }) => {
  if (!tasks.length) return <div className="todo__empty-message"></div>;
  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          className="todo__item"
          id={task.id}
          title={task.title}
          isDone={task.isDone}
          onDeleteItem={onDeleteItem}
          onDone={onDone}
        />
      ))}
    </ul>
  );
};
export default TodoList;
