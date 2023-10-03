import { useDispatch, useSelector } from "react-redux";
import { selectUsername } from "../../redux/auth/auth-selectors";
import { logout } from "../../redux/auth/auth-operations";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);
  return (
    <div>
      <p>Welcome {name}!</p>
      <button type="button" onClick={() => dispatch(logout())}>
        LogOut
      </button>
    </div>
  );
};
