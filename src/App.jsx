import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleUserPage from "./pages/SingleUserPage";
import RolePage from "./pages/RolePage";
import Main from "./pages/Main";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<RolePage />} />
          <Route path="singleuser" element={<SingleUserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}