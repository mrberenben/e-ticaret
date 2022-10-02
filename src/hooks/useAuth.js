import { useContext, useDebugValue } from "react";
import AuthContext from "src/context/auth";

const useAuth = () => {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth, auth => (auth?.accessToken ? "Logged In" : "Logged Out"));
  return useContext(AuthContext);
};

export default useAuth;