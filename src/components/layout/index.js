import { Outlet } from "react-router-dom";

// components
import Header from "src/components/header";
import Categories from "src/components/categories";
import Breadcrumb from "src/components/breadcrumb";
import Footer from "src/components/footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Categories />
      <Breadcrumb />

      <main role="main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default AppLayout;
