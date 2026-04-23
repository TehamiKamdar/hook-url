import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Main/Home";
import MainLayout from "./layout/MainLayout";
import Register from "./pages/Main/Register";

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
        <Route path="/register" element={ <Register /> }></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;