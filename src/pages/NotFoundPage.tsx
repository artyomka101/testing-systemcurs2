import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <main>
      <h1>404 — страница не найдена</h1>
      <Link to ="/">Вернуться на главную</Link>
    </main>
  );
}
