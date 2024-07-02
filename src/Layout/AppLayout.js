import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        <span>Hello from layout</span>
        <Outlet />
      </main>

      <Sidebar />
    </div>
  );
}
