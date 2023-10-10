import { Navigate, Route, Routes } from "react-router-dom";
import MainLoyaut from "../loyouts/MainLoyout/MainLoyout";
import AddNewContact from "../pages/AddNewContact";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { lazy } from "react";

const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const Contacts = lazy(() => import("../pages/Contacts"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/contacts-app-frontend/" element={<MainLoyaut />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="/contacts-app-frontend/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts-app-frontend/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts-app-frontend/add"
            element={
              <PrivateRoute>
                <AddNewContact />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/contacts-app-frontend/" />} />
      </Routes>
    </>
  );
}

export default App;
