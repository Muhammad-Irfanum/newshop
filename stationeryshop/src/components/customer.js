import React, { useState, useEffect } from 'react';
import { getUserData } from '../Service/api'; // Fetch user data from the database

const Customer = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserData(); // Replace with your API call to fetch user data
        setUserData(response.data); // Store the fetched user data in the state
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Welcome, {userData.email}</h2>
      {/* Render the rest of the customer information */}
    </div>
  );
};

export default Customer;
