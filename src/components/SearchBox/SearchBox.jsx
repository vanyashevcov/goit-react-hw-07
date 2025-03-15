import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import s from './SearchBox.module.css'

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <>
      <p className={s.searchText}>Find contacts by name</p>
      <input className={s.searchBox} type="text" onChange={handleChange} />
    </>
  );
}
