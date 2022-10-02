import axios from "src/utils/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.post("/Auth/RefreshLogin", {
      resfreshToken: auth?.resfreshToken
    });
    setAuth(prev => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return { ...prev, accessToken: response.data.token };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
