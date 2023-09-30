import { Route, Routes } from "react-router-dom";
import MainLoyaut from "./loyouts/MainLoyout/MainLoyout";
import Contacts from "./pages/Contacts";
import AddNewContact from "./pages/AddNewContact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/contacts-app-frontend/" element={<MainLoyaut />}>
          <Route index element={<Contacts />} />
          <Route
            path="/contacts-app-frontend/add/"
            element={<AddNewContact />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
