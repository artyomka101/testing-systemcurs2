import type { Role } from "../types";
import { useState, type SubmitEvent } from "react";
import { Navigate, useNavigate } from "react-router";

type LoginPageProps = {
  role: Role | null;
  login: (role: Role) => void;
};
export function LoginPage({ role, login }: LoginPageProps) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (role) {
    return (
      <Navigate to={role === "admin" ? "/admin" : "/student/tests"} replace />
    );
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    let nextRole: Role;
    if (username === "student" && password === "12345") {
      nextRole = "student";
    } else if (username === "admin" && password === "12345") {
      nextRole = "admin";
    } else {
      setError("Неверный логин или пароль");
      return;
    }

    setError("");
    login(nextRole);
    navigate(nextRole === "admin" ? "/admin" : "/student/tests", {
      replace: true,
    });
  }
  return (
    <main>
      <h1>Добро пожаловать</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Логин</label>
          <input
            type="text"
            value={username}
            id="username"
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Пароль</label>
          <input
            type="text"
            value={password}
            id="password"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        {error && <p>{error}</p>}

        <button type="submit">Войти</button>
      </form>
    </main>
  );
}
