import { Routes, Route } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import AccountScreen from "./components/AccountScreen";
import RegisterDisplay from "./components/pages/RegisterDisplay";
import LoginDisplay from "./components/pages/LoginDisplay";
import "./index.css";
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-4">
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/account" element={<AccountScreen />} />
        <Route path="/register-display" element={<RegisterDisplay />} />
        <Route path="/login-display" element={<LoginDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
