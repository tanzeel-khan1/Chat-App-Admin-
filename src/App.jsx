import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import GetMsgByName from "./pages/GetMsgByName";
import GetMsgByNameDate from "./pages/GetMsgByNameDate";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* ❌ No Sidebar */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ✅ Sidebar ALWAYS visible */}
        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/get-msg-name" element={<GetMsgByName />} />
          <Route path="/get-msg-name-date" element={<GetMsgByNameDate />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
