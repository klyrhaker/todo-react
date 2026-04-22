import Field from "./Field";

const SearchTaskForm = ({ onSearchInput, valueSearch }) => {
  return (
    <form className="todo__form">
      <Field
        label="Search task"
        className="todo__field"
        id="search-task"
        type="search"
        onChange={onSearchInput}
        value={valueSearch}
      />
    </form>
  );
};
export default SearchTaskForm;
