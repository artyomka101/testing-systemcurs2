import { Route, Routes, Navigate } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import {
  TestsPage,
  StatsPage,
  ProfilePage,
  TestPage,
  StatPage,
} from "./pages/StudentPage";
import { StudentLayout } from "./components/StudentLayout";
import { AdminLayout } from "./components/AdminLayout";
import { AdminPage, UserPage, TestManagementPage } from "./pages/AdminPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { useState } from "react";
import type { Role } from "./types";
import { ProtectedRoute } from "./components/ProtectedRoute";
const STORAGE_KEY = "testing-role";

function getSavedRole(): Role | null {
  const saveRole = localStorage.getItem(STORAGE_KEY);
  return saveRole === "student" || saveRole === "admin" ? saveRole : null;
}

function App() {
  const [role, setRole] = useState<Role | null>(getSavedRole);

  function login(newRole: Role) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.setItem(STORAGE_KEY, newRole);
    setRole(newRole);
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY);
    setRole(null);
  }

  const homePath =
    role === "admin"
      ? "/admin"
      : role === "student"
        ? "/student/tests"
        : "/login";

  return (
    <Routes>
      <Route path="/" element={<Navigate to={homePath} replace />} />
      <Route path="/login" element={<LoginPage role={role} login={login} />} />
      <Route element={<ProtectedRoute role={role} allowedRole="student" />}>
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Navigate to="tests" replace />} />
          <Route path="tests" element={<TestsPage />} />
          <Route path="tests/:testId" element={<TestPage />} />
          <Route path="stats" element={<StatsPage />} />
          <Route path="stats/:statId" element={<StatPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute role={role} allowedRole="admin" />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPage logout={logout} />} />
          <Route path="users" element={<UserPage />} />
          <Route path="tests" element={<TestManagementPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
