import { useUserCookie } from "hooks";
import React, { useEffect, useState } from "react";
import "./MyProfile.css";

export default function MyProfile() {
  // Initial user data
  const initialUserData = {
    firstName: "John",
    lastName: "Doe",
    email: "email",
    // Add more fields as needed
  };
  // State to manage user data
  const [userData, setUserData] = useState(initialUserData);

  // State to track whether the user is in edit mode
  const [isEditMode, setIsEditMode] = useState(false);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to save the updated user data
    setIsEditMode(false);
  };

  const { cookie } = useUserCookie();

  useEffect(() => {
    if (cookie) {
      setUserData((prevUserData) => ({ ...prevUserData, ...cookie }));
    }
  }, [cookie]);

  return (
    <div className="myprofile-container">
      <h1 className="myprofile-title">My Profile</h1>
      {isEditMode ? (
        // Edit mode form
        <form onSubmit={handleSubmit} className="myprofile-form">
          <div className="myprofile-form-group">
            <label htmlFor="firstName" className="myprofile-label">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={userData.firstName}
              onChange={handleInputChange}
              className="myprofile-input"
            />
          </div>
          <div className="myprofile-form-group">
            <label htmlFor="lastName" className="myprofile-label">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={userData.lastName}
              onChange={handleInputChange}
              className="myprofile-input"
            />
          </div>
          <div className="myprofile-form-group">
            <label htmlFor="email" className="myprofile-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="myprofile-input"
            />
          </div>
          {/* Add more fields as needed */}
          <button type="submit" className="myprofile-button">
            Save
          </button>
        </form>
      ) : (
        // Display mode
        <div className="myprofile-details">
          <p>
            <strong>First Name:</strong> {userData.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {userData.lastName}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          {/* Display more fields as needed */}
          <button
            onClick={() => setIsEditMode(true)}
            className="myprofile-button"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
