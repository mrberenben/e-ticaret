import { useEffect } from "react";
import Router from "./Router";

// utils
import useAuth from "src/hooks/useAuth";
import axios from "src/utils/axios";

function App() {
  const { setAuth } = useAuth();

  useEffect(() => {
    const fetchCredentials = async () => {
      const credentials = {
        userName: process.env.REACT_APP_AUTH_USERNAME,
        password: process.env.REACT_APP_AUTH_PASSWORD
      };
      const response = await axios.post(
        "/Auth/Login",
        JSON.stringify(credentials)
      );

      return response.data;
    };

    fetchCredentials().then(({ data }) =>
      setAuth({
        accessToken: data.token,
        refreshToken: data.refreshToken
      })
    );
  }, [setAuth]);

  return <Router />;
}

export default App;

