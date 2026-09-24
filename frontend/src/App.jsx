import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import SiteReports from "./pages/SiteReports";
import Materials from "./pages/Materials";
import Expenses from "./pages/Expenses";
import Attendance from "./pages/Attendance";
import Documents from "./pages/Documents";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/site-reports" element={<SiteReports />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;