import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Banner from "../components/Banner";

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
