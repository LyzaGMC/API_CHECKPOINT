// src/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]); // État pour stocker la liste des utilisateurs
  const [loading, setLoading] = useState(true); // État pour indiquer si les données sont en cours de chargement
  const [error, setError] = useState(null); // État pour gérer les erreurs

  useEffect(() => {
    // Fonction pour récupérer les utilisateurs
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Appel de l'API
        setListOfUsers(response.data); // Mettre à jour l'état avec les données
        setLoading(false); // Mettre à jour l'état de chargement
      } catch (err) {
        setError(err.message); // Gérer les erreurs
        setLoading(false); // Mettre à jour l'état de chargement
      }
    };

    fetchUsers(); // Appeler la fonction
  }, []); // Dépendances vides pour exécuter l'effet une seule fois lors du montage

  // Gestion de l'affichage
  if (loading) {
    return <div>Loading...</div>; // Afficher un message de chargement
  }

  if (error) {
    return <div>Error: {error}</div>; // Afficher un message d'erreur
  }

  return (
    <div>
      <h1>Liste des Utilisateurs</h1>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>
            {user.name} - {user.email} {/* Afficher le nom et l'email de l'utilisateur */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
