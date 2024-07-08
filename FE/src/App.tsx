import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import AuthForm from "./containers/AuthForm";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/register" element={<AuthForm />} />
      <Route path="/Login" element={<AuthForm />} />

      <Route path="/admin" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
