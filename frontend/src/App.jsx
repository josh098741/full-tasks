import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [showRegister, setShowRegister] = useState(false);

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <div className="container">
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 className="title">To-Do List App</h1>
        {token && (
          <button className="btn logout" onClick={handleLogout}>
            Logout
          </button>
        )}
      </header>

      {token ? (
        <TodoList token={token} />
      ) : (
        <div className="card">
          {showRegister ? (
            <Register setShowRegister={setShowRegister} />
          ) : (
            <Login setToken={setToken} setShowRegister={setShowRegister} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
