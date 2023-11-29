import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Views/Login";
import Register from "./Views/Register";
import Home from "./Views/Home";
import Profile from "./Views/Profile";
import { AuthorizedUserProvider } from "./Context/AuthUserContext";

function App() {
  return (
    <AuthorizedUserProvider>
      <MainContent />
    </AuthorizedUserProvider>
  );
}

function MainContent() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route exact path="/signup" element={<Register />} />
      </Routes>
      <Routes>
        <Route exact path="/find-matches" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/matches" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/visitors" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/likes" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/your-likes" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/unlikes" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
