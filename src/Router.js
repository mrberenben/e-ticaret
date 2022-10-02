import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import AppLayout from "src/components/layout";

// pages
import Home from "src/pages/home";

// hooks
import useAuth from "src/hooks/useAuth";

const Router = () => {
  const { auth } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {auth?.accessToken && <Route path="/" element={<Home />} />}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
