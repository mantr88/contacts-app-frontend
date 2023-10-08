import { NavLink } from "react-router-dom";
import css from "../MainLoyout/MainLoyout.module.css";
import { selectIsLoggedIn } from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import { AuthNav } from "../../components/AuthNav/AuthNav";
import { UserMenu } from "../../components/UserMenu/UserMenu";

const AppSideBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.sidebar}>
      AppSideBar
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <NavLink
          to={"/contacts-app-frontend/contacts"}
          style={{ marginTop: 20 }}
        >
          Contacts
        </NavLink>
        <NavLink to={"/contacts-app-frontend/add"} style={{ marginBottom: 20 }}>
          New contact
        </NavLink>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </div>
  );
};

export default AppSideBar;
