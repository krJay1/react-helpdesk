import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProctectedRoutes from "./components/utility/ProctectedRoutes";
import Layout from "./layout/Layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/signIn" element={<SignInPage/>} />
      <Route path="/signUp" element={<SignUpPage/>} />
      <Route element={<Layout/>}>        
        <Route path="/" 
          element={
            <ProctectedRoutes>
              <HomePage/>
            </ProctectedRoutes> 
          }
        />
      </Route>
    </Routes>
  );
}