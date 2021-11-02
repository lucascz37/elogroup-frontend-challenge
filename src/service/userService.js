const users = JSON.parse(localStorage.getItem("users")) || [];

const createUser = (name, password) => {
  if (users.filter((user) => user.name === name).length > 0) {
    return false;
  }

  users.push({ name, password });
  localStorage.setItem("users", JSON.stringify(users));
  return true;
};

const authUser = (name, password) => {
  const user = users.filter((user) => user.name === name);
  if (user.length > 0 && user[0].password === password) {
    return true;
  }

  return false;
};

export { createUser, authUser };
