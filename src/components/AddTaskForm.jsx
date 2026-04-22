import Button from "./Button";
import Field from "./Field";

const AddTaskForm = ({ onAdd, onChange, value }) => {
  return (
    <form
      className="todo__form"
      onSubmit={(e) => {
        e.preventDefault();

        onAdd();
      }}
    >
      <Field
        id="new-task"
        label="New Task"
        className="todo__field"
        onChange={onChange}
        value={value}
      />
      <Button type="submit">Add</Button>
    </form>
  );
};
export default AddTaskForm;
