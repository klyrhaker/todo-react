const Field = (props) => {
  const { className = "", id, label, value, onChange } = props;
  return (
    <div className={`todo__field ${className}`}>
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        placeholder=" "
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default Field;
