import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserInfo from './UserInfo';
import GenderPreference from './GenderPreference';

const RandomUser = () => {
  const [userData, setUserData] = useState(null);
  const [gender, setGender] = useState('');

  useEffect(() => {
    // Función para consumir el endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/', {
          params: { gender }
        });
        setUserData(response.data.results[0]);
        console.log(response.data.results[0]); // Mostrar en consola
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (gender) {
      fetchData();
    }
  }, [gender]);

  return (
    <div>
      <h1>Random User</h1>
      <GenderPreference onChange={setGender} />
      {userData ? <UserInfo user={userData} /> : <p>Loading...</p>}
    </div>
  );
};

export default RandomUser;