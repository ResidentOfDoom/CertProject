import { instance as axios } from '../axios'

export const login = async (data) => {
  const jsonPayload = {
    email: data.get("email"),
    password: data.get("password"), //To btoa() function kanei encode se base-64
  };

  const response = await axios.post("Account/Login", {
    body: JSON.stringify(jsonPayload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const responseData = await response.json();
    return responseData;
  } else {
    console.error(
      "Failed to submit form data:",
      response.status,
      response.statusText
    );
  }
};
