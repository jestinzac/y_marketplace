const SelectBox = ({ dataItems, onChangeHandler, type, isDisabled }) => (
  <>
    <label htmlFor={type} className="pt-10 m-5 cursor-pointer">
      Available Jobs for:&nbsp;
    </label>
    <select
      name={type}
      id={type}
      onChange={onChangeHandler}
      className="shadow-inner mx-4 h-11"
      disabled={isDisabled}
      data-testid="username"
    >
      {dataItems?.map((data) => {
        return (
          <option key={data.id} value={data.id} data-testid="option-value">
            {data.username}
          </option>
        );
      })}
    </select>
  </>
);

export default SelectBox;
