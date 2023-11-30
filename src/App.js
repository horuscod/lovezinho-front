import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Views/Login";
import Register from "./Views/Register";
import Home from "./Views/Home";
import Profile from "./Views/Profile";
import Visitors from "./Views/Visitors";
import Matches from "./Views/Matches";
import Likes from "./Views/Likes";
import YourLikes from "./Views/YourLikes";
import Unlikes from "./Views/Unlikes";
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
        <Route exact path="/" element={<Login />} />
      </Routes>
      <Routes>
        <Route exact path="/signup" element={<Register />} />
      </Routes>
      <Routes>
        <Route exact path="/find-matches" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/matches" element={<Matches />} />
      </Routes>
      <Routes>
        <Route exact path="/visitors" element={<Visitors />} />
      </Routes>
      <Routes>
        <Route exact path="/likes" element={<Likes />} />
      </Routes>
      <Routes>
        <Route exact path="/your-likes" element={<YourLikes />} />
      </Routes>
      <Routes>
        <Route exact path="/unlikes" element={<Unlikes />} />
      </Routes>
      <Routes>
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
