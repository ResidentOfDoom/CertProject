import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export const useUserCookie = () => {
  const [cookie, setCookie] = useState(null);

  useEffect(() => {
    // Retrieve the cookie value when the component mounts
    const storedCookie = Cookies.get("currentUser");
    if (storedCookie) {
      // Parse the JSON string into an object
      setCookie(JSON.parse(storedCookie));
    }
  }, []);

  const handleSetCookie = (cookie) => {
    // Set a new cookie value with an object
    const newValue = cookie;
    Cookies.set("currentUser", JSON.stringify(newValue), { expires: 7 }); // Set cookie with a 7-day expiration
    setCookie(newValue);
  };

  const handleRemoveCookie = () => {
    // Remove the cookie
    Cookies.remove("currentUser");
    setCookie("");
  };

  return { cookie, handleSetCookie, handleRemoveCookie };
};
