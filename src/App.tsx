import { Routes, Route, useNavigate } from "react-router-dom";
import LoginTs from "./AppModules/LoginScreen/LoginTs.tsx";
import Dashboard from "./AppModules/DashboardScreen/Dashboard.tsx";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginTs />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
