import React, { useState, useCallback } from "react";

const UsernameInput = ({ value, onChange }) => {
  return (
    <input
      name="username"
      placeholder="username"
      value={value}
      onChange={onChange}
    />
  );
};

const PasswordInput = ({ value, onChange }) => {
  return (
    <input
      name="password"
      placeholder="password"
      value={value}
      onChange={onChange}
      type="password"
    />
  );
};

const Form = () => {
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  //   const handleChangeUsername = useCallback(
  //     e => setUsernameValue(e.currentTarget.value),
  //     [usernameValue]
  //   );
  //   const handleChangePassword = useCallback(
  //     e => setPasswordValue(e.currentTarget.value),
  //     [passwordValue]
  //   );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      alert("username: " + usernameValue + " / password: " + passwordValue);
    },
    [usernameValue, passwordValue]
  );
  return (
    <form onSubmit={handleSubmit}>
      <UsernameInput
        value={usernameValue}
        onChange={e => setUsernameValue(e.currentTarget.value)}
      />
      <PasswordInput
        value={passwordValue}
        onChange={e => setPasswordValue(e.currentTarget.value)}
      />
      <input type="submit" value="submit" />
    </form>
  );
};

export default Form;
