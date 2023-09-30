import { Suspense } from "react";
import css from "./MainLoyout.module.css";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import AppSideBar from "../AppSideBar/AppSideBar";
import Footer from "../Footer/Footer";

const MainLoyaut = () => {
  return (
    <div className={css.container}>
      <Header />
      <AppSideBar />
      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default MainLoyaut;
