import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";

export const RoutePravider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
