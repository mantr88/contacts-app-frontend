import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filter/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filter);
  const changeValue = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <label>
      <input
        type="text"
        value={value}
        onChange={changeValue}
        placeholder="Find contacts by name"
      ></input>
    </label>
  );
};
