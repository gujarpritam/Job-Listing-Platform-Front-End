import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import JobPostPage from "./pages/JobPostPage/JobPostPage";
import JobDetailsPage from "./pages/JobDetailsPage/JobDetailsPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/job-post" element={<JobPostPage />} />
        <Route path="/job-details/:id" element={<JobDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
