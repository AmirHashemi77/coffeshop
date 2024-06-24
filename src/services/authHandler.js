export const signUpHandler = async (userData) => {
  const res = await fetch(
    `https://coffeshopapi.amirhashemi776.ir/users?email=${userData.email}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!res.ok) {
    throw new Error("some thing is wrong");
  }
  const data = await res.json();

  if (data.length > 0) {
    throw new Error(
      "Your email or phone number is already registered on the site ."
    );
  }

  const postRes = await fetch(`https://coffeshopapi.amirhashemi776.ir/users`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!postRes.ok) {
    throw new Error("some thing is wrong");
  }

  return data;
};

export const logInHandler = async (logInData) => {
  const res = await fetch(
    `https://coffeshopapi.amirhashemi776.ir/users?email=${logInData.email}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!res.ok) {
    throw new Error("some thing is wrong");
  }
  const data = await res.json();

  if (data.length === 0) {
    throw new Error("User not found .");
  }
  return data;
};

export const updateUserData = async (userData) => {
  if (userData) {
    const res = await fetch(
      `https://coffeshopapi.amirhashemi776.ir/users?email=${userData.email}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) {
      throw new Error("some thing is wrong");
    }
    const data = await res.json();

    return data;
  } else {
     throw new Error("user not found");
  }
};
