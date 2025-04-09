export const signUp = async (data) => {
  try {
    const response = await fetch("http://localhost:5021/api/Candidates", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("error signing up");
    }
  } catch (error) {
    console.error("An error occurred while submitting form data", error);
  }
};
