import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Main/Home";
import MainLayout from "./layout/MainLayout";
import Register from "./pages/Auth/Register";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Auth/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route path="/register" 
          element={ 
            <AuthLayout title="Create Account" subtitle="Start your journey with HookURL today" isLogin={false}><Register /></AuthLayout>
          }>
         </Route>
        <Route path="/login" 
          element={ 
            <AuthLayout title="Welcome Back!" subtitle="Sign in to access your HookURL dashboard" isLogin={true}><Login /></AuthLayout>
          }>
         </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;