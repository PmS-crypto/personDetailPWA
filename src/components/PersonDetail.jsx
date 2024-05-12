// PersonDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';


const PersonDetail = ({ person }) => {
    const { id } = useParams();

  return (
    <div>
      <h1>Person Details</h1>
      <p><strong>Name:</strong> {person.firstName} {person.lastName}</p>
      <p><strong>Email:</strong> {person.email}</p>
      <p><strong>Phone:</strong> {person.phone}</p>
      <p><strong>State:</strong> {person.state}</p>
      <p><strong>City:</strong> {person.city}</p>
    </div>
  );
};

export default PersonDetail;
