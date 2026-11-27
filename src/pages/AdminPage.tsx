import { useNavigate } from 'react-router';

type AdminPageProps = {
  logout: () => void;
};
export function AdminPage({ logout }: AdminPageProps) {
  const navigate = useNavigate();
 
  function handleLogout() {
    logout();
    navigate('/login', { replace: true });
  }
 
  return (
    <main>
      <h1>Личный кабинет администратора</h1>
      <p>Страница находится в разработке.</p>
 
      <button type="button" onClick={handleLogout}>
        Выйти
      </button>
    </main>
  );
}


export function TestManagementPage() {
  return (
    <>
    <h1>Управление тестированиями</h1>
    <p>Здесь вы можете управлять тестами и их настройками.</p>
    </>
  );
}

export function UserPage() {
  return (
    <>
    <h1>Управление пользователями</h1>
    <p>Здесь вы можете управлять пользователями и их правами доступа.</p>
    </>
  );
}
