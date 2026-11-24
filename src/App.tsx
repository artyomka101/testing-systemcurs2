import { Route, Routes } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { TestsPage, StatsPage, ProfilePage, TestPage, StatPage} from "./pages/StudentPage";
import { StudentLayout } from "./components/StudentLayout";
import { AdminLayout } from "./components/AdminLayout";
import { AdminPage, UserPage, TestManagementPage } from "./pages/AdminPage";
import { NotFoundPage } from "./pages/NotFoundPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/student" element={<StudentLayout />}>
        <Route path="tests" element={<TestsPage />} />
          <Route path="tests/:testId" element={<TestPage />} />
        <Route path="stats" element={<StatsPage />} />
          <Route path="stats/:statId" element={<StatPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminPage />} />
        <Route path="users" element={<UserPage />} />
        <Route path="tests" element={<TestManagementPage />} />
      
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
