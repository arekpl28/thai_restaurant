import { Img, Li, Nav, Title, Ul } from "./MainNavigation";

function MainNavigation() {
  return (
    <>
      <Nav>
        <Img src="icon.png" alt="Logo" />
        <Title>Thai Restaurant</Title>
        <Ul>
          <Li>home</Li>
          <Li>menu</Li>
          <Li>kontakt</Li>
          <Li>search</Li>
        </Ul>
      </Nav>
    </>
  );
}

export default MainNavigation;
