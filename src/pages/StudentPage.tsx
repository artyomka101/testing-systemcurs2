import { Link, useParams } from "react-router";
export function TestsPage() {
  return (
    <>
      <h1>Тестирование</h1>
      <ul>
        <li>
          <Link to="/student/tests/1">Тестирование №1</Link>
        </li>
        <li>
          <Link to="/student/tests/2">Тестирование №2</Link>
        </li>
        <li>
          <Link to="/student/tests/3">Тестирование №3</Link>
        </li>
      </ul>
    </>
  );
}

export function StatsPage() {
  return (
    <>
      <h1>Статистика</h1>
      <ul>
        <li>
          <Link to="/student/stats/1">Статистика №1</Link>
        </li>
        <li>
          <Link to="/student/stats/2">Статистика №2</Link>
        </li>
        <li>
          <Link to="/student/stats/3">Статистика №3</Link>
        </li>
      </ul>
    </>
  );
}

export function TestPage() {
  const {testId} = useParams();
  return (
    <>
      <h1>Тестирование №{testId}</h1>
      <Link to="/student/tests">Вернуться к списку тестов</Link>
    </>
  );
}

export function StatPage() {
  const {statId} = useParams();
  return (
    <>
      <h1>Статистика №{statId}</h1>
      <Link to="/student/stats">Вернуться к списку статистик</Link>
    </>
  );
}

export function ProfilePage() {
  return <h1>Профиль</h1>;
}