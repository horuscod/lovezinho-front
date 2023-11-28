import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Views/Login";
import Home from "./Views/Home";
import { AuthorizedUserProvider } from "./Context/AuthUserContext";

function App() {
  return (
    <AuthorizedUserProvider>
      <DataUserProvider>
        <MainContent />
      </DataUserProvider>
    </AuthorizedUserProvider>
  );
}

function MainContent() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route exact path="/find-matches" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
