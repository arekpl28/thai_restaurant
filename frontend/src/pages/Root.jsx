import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation.jsx";
import Banner from "../components/Banner.jsx";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <Banner />
      <Outlet />
    </>
  );
}

export default RootLayout;
