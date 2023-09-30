import { NavLink } from "react-router-dom";
import css from "../MainLoyout/MainLoyout.module.css";

const AppSideBar = () => {
  return (
    <div className={css.sidebar}>
      AppSideBar
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <NavLink to={"/contacts-app-frontend/"} style={{ marginTop: 20 }}>
          Contacts
        </NavLink>
        <NavLink
          to={"/contacts-app-frontend/add/"}
          style={{ marginBottom: 20 }}
        >
          New contact
        </NavLink>
      </div>
    </div>
  );
};

export default AppSideBar;
