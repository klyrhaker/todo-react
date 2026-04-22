import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([
    {
      title: "coding 6 hours everyday",
      id: crypto?.randomUUID() ?? Date.now().toString(),
      isDone: false,
    },
  ]);
  const [querySearch, setQuerySearch] = useState("");
  const visibleValue = tasks.filter(({ title }) =>
    title.toLowerCase().includes(querySearch.toLowerCase()),
  );

  const total = tasks.length;
  const done = tasks.filter(({ isDone }) => isDone).length;

  const onAdd = () => {
    if (!value) return;
    setTasks((prev) => [
      ...prev,
      {
        title: value,
        id: crypto?.randomUUID() ?? Date.now().toString(),
        isDone: false,
      },
    ]);
    setValue("");
  };
  const handleInputValue = (e) => {
    setValue(e.target.value);
  };
  const onDeleteAll = () => {
    setTasks([]);
  };
  const onDeleteItem = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const onDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  };
  const filterTasks = (e) => {
    setQuerySearch(e.target.value);
  };
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm onAdd={onAdd} onChange={handleInputValue} value={value} />
      <SearchTaskForm valueSearch={querySearch} onSearchInput={filterTasks} />
      <TodoInfo total={total} done={done} onDeleteAll={onDeleteAll} />
      <TodoList
        tasks={visibleValue}
        onDeleteItem={onDeleteItem}
        onDone={onDone}
      />
    </div>
  );
};
export default Todo;
