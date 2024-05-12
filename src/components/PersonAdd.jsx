// PersonAdd.js
import React, { useState } from 'react';

const PersonAdd = ({ addPerson }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPerson(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      state: '',
      city: '',
    });
  };

  return (
    <div>
      <h1>Add Person</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            pattern="[A-Za-z ]+"
          />
        </div>
    </form>
    </div>

    );
};

export default PersonAdd;