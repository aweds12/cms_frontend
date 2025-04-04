import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function useToken(): [string | undefined, (tokenValue: string) => void] {
  const [userToken, setUserToken] = useState<string | undefined>(undefined);
  const tkn = Cookies.get("token");

  useEffect(() => {
    setUserToken(tkn);
  }, [tkn]);

  const setToken = (tokenValue: string) => {
    Cookies.set("token", tokenValue);
    alert(tokenValue);
  };

  return [userToken, setToken];
}

export default useToken;
