import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className="app-body">
        <Sidebar />
        <Feed />
      </div>
      {/*  Sidebar */}
      {/*  Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
