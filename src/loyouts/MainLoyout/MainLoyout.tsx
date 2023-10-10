import { Suspense } from "react";
import css from "./MainLoyout.module.css";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import AppSideBar from "../AppSideBar/AppSideBar";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/auth-selectors";

const MainLoyaut = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      {isLoggedIn && <Header />}
      {isLoggedIn && <AppSideBar />}
      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
      {isLoggedIn && <Footer />}
    </div>
  );
};

export default MainLoyaut;
