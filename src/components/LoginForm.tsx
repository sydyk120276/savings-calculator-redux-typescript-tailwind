import React, { FC, useState } from "react";

import { useAppDispatch } from "../hooks/useAppDispatch";

const LoginForm: FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, registration, logout } = useAppDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Введите Имя"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <input
        type="text"
        placeholder="Введите Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="password"
        placeholder="Введите пароль"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={() => login(userName, email, password)}>Логин</button>
      <button onClick={() => registration(userName, email, password)}>
        Регистрация
      </button>
    </div>
  );
};

export default LoginForm;
