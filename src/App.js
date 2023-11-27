import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Views/Login";
import { AuthorizedUserProvider } from "./Context/AuthUserContext";
import { DataUserProvider } from "./Context/DataUserContext";

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
    </Router>
  );
}

export default App;
