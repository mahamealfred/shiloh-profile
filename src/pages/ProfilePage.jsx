import React from 'react';
// import './Profile.css'; // For advanced styling
import shilohImage from '../assets/shiloh.jpeg'; // Assuming you have her image

const Profile = () => {
  return (
    <>
      <header className="profile-header">
        <h1>Welcome to Shiloh's Profile</h1>
      </header>

      <div className="profile-container">
        <div className="profile-card">
          <img src={shilohImage} alt="Shiloh Ishimwe Rwamugire" className="profile-image" />
          <h1 className="profile-name">Shiloh Ishimwe Rwamugire</h1>
          <p className="profile-age">Age: 8</p>
        </div>
        <section className="profile-about">
          <h2>About Shiloh</h2>
          <p>Hi, I'm Shiloh Ishimwe Rwamugire. I'm 8 years old and a student at Path to Success School. I'm currently in Grade 3, and I love learning new things every day!</p>
        </section>
      </div>

      <footer className="profile-footer">
        <p>© 2024 Shiloh's Profile - All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Profile;
