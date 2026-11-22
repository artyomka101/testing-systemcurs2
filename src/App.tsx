import { Route, Routes } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { AdminPage } from "./pages/AdminPage";
import { TestsPage, StatsPage, ProfilePage, TestPage, StatPage} from "./pages/StudentPage";
import { StudentLayout } from "./components/StudentLayout";
import { NotFoundPage } from "./pages/NotFoundPage";
import { MoviesPage, MoviePage } from "./pages/MoviesPage";
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
      <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MoviePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
