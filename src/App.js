// src/App.js
import React from "react";
import UserList from "./UserList"; // Importer le composant UserList
import "./App.css"; // Importer le fichier CSS pour les styles
function App() {
  return (
    <div className="App">
      <UserList /> {/* Utiliser le composant UserList */}
    </div>
  );
}

export default App;
