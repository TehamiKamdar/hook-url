import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Main/Home";
import MainLayout from "./layout/MainLayout";
import Register from "./pages/Auth/Register";
import AuthLayout from "./layout/AuthLayout";

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
            <AuthLayout title="Create Account" subtitle="Start your journey with HookURL today"><Register /></AuthLayout> 
          }>
         </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;