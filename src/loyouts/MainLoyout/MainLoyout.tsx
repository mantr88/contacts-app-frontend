import Loyout from "../Loyout/Loyout";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/auth-selectors";
import { Container } from "@mui/material";

const MainLoyaut = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
      <Loyout />
      <Footer />
    </Container>
  );
};

export default MainLoyaut;
