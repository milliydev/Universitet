import React, { useState } from 'react';
import '../style/foodDetail.css';

function ProfileForm() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-containers">
    <div className="profile-container">
      <h2 className="profile-title">Teacher Profile</h2>
      <div className="profile-image-section">
        <div className="profile-image-placeholder">
          {image ? <img src={image} alt="Profile" /> : <span>150 x 150</span>}
        </div>
        <label htmlFor="imageUpload" className="profile-upload-button">
          Rasm joylash
        </label>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
      </div>
      <form className="profile-form">
        <div className="form-group">
          <label>Admin Ism</label>
          <input type="text" value="John" />
        </div>
        <div className="form-group">
          <label>Admin Familiya</label>
          <input type="text" value="Doe" />
        </div>
        <div className="form-group">
          <label>Admin ID</label>
          <input type="text" value="johndoe" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value="johndoe@example.com" />
        </div>
        <div className="form-group">
          <label>Telefon</label>
          <input type="tel" value="+1234567890" />
        </div>
        <div className="form-group">
          <label>Joriy Parol</label>
          <input type="password" />
        </div>
        <div className="form-group">
          <label>Yangi Parol</label>
          <input type="password" />
        </div>
        <div className="form-group">
          <label>Yangi Parolni Tasdiqlang</label>
          <input type="password" />
        </div>
        <button className="save-button">Saqlash</button>
      </form>
    </div>
    </div>
  );
}

export default ProfileForm;
