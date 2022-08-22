import { Actions, Nav, NavContainer } from "./styles";
import estrngLogo from "../../assets/logo.svg";
import { Button } from "../Button";
import { Logo } from "../Logo";
import { Location } from "../Location";

function Header() {
  return (
    <>
      <Nav>
        <NavContainer>
          <Logo src={estrngLogo} />
          <Actions>
            <Location city="São Paulo" />
            <Button hasBadge={true} />
          </Actions>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Header;
// TODO: get geo location and show city name in header