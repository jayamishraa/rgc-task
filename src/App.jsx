import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import SingleUserPage from "./pages/SingleUserPage";
import RolePage from "./pages/RolePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<RolePage />} />
          <Route path="singleuser" element={<SingleUserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}