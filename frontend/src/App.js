import { Navigate, Route, Routes, useRoutes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import React, { useEffect, useState } from "react";
import { AuthProvider } from "./Hooks/useContext";
import { ChakraProvider } from "@chakra-ui/react";
import { ProtectedRoute } from "./Component/ProtectedRoute/ProtectedRoute";
import SingIn from "./Pages/SingIn/SingIn";
import ProfilePage from "./Pages/Profile/Profile";
export default function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/singin" element={<SingIn />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          {/* <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        }
      /> */}
        </Routes>
      </AuthProvider>
    </ChakraProvider>
  );
}
