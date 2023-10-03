import { Filter } from "../Filter/Filter";
import css from "../MainLoyout/MainLoyout.module.css";

export const Header = () => {
  return (
    <div className={css.header}>
      Header
      <Filter />
    </div>
  );
};

export default Header;
