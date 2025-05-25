import React, { useState } from 'react';
import {
  FaUserCircle,
  FaComment,
  FaLanguage,
  FaCalendar,
  FaClock,
  FaGlobe,
  FaMapMarkerAlt,
  FaSave,
  FaTrashAlt,
  FaUpload,
  FaTrash,
} from 'react-icons/fa'; // Importing icons
import './Personalinfo.css';

const PersonalInfo = () => {
  const [name, setName] = useState('Morty Smith');
  const [welcomeMessage, setWelcomeMessage] = useState(
    'Welcome to my scheduling page. Please follow the instructions to add an event to my calendar.'
  );
  const [language, setLanguage] = useState('English');
  const [dateFormat, setDateFormat] = useState('MM/DD/YYYY');
  const [timeFormat, setTimeFormat] = useState('12h (am/pm)');
  const [country, setCountry] = useState('United States');
  const [timeZone, setTimeZone] = useState('Central Time - US & Canada');
  const [avatar, setAvatar] = useState(null);

  const handleSave = () => {
    alert('Changes saved!');
  };

  const handleDelete = () => {
    alert('Account deleted! We will miss you and we are waiting for you again');
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarRemove = () => {
    setAvatar(null);
  };

  return (
    <div className="personalinfoaccount-settings" style={{ marginTop: '200px' }}>
      <h2>Account Settings</h2>
      <div className="personalinfoprofile-picture"
        style={{ marginBottom: '10px' }}>
        <img
          src={avatar || '/path-to-placeholder-image.png'}
          alt="Avatar"
          className="personalinfoavatar"
        />
        <div>
          <label htmlFor="avatar-upload" className="personalinfoupdate-btn">
            <FaUpload style={{ marginRight: '5px'}} /> Update
          </label>
          <input
            type="file"
            id="avatar-upload"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleAvatarChange}
          />
          <button
            className="personalinforemove-btn"
            onClick={handleAvatarRemove}
          >
            <FaTrash style={{ marginRight: '5px' }} /> Remove
          </button>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="personalinfoform-group">
        <label htmlFor="name">
          <FaUserCircle style={{ marginRight: '5px',color:'#4BAF47' }} />
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="personalinfoform-group">
        <label htmlFor="welcomeMessage">
          <FaComment style={{ marginRight: '5px',color:'#4BAF47' }} />
          Welcome Message
        </label>
        <textarea
          id="welcomeMessage"
          value={welcomeMessage}
          onChange={(e) => setWelcomeMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="personalinfoform-group">
        <label htmlFor="language">
          <FaLanguage style={{ marginRight: '5px',color:'#4BAF47' }} />
          Language
        </label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
      <div className="personalinfoform-group">
        <label htmlFor="dateFormat">
          <FaCalendar style={{ marginRight: '5px',color:'#4BAF47' }} />
          Date Format
        </label>
        <select
          id="dateFormat"
          value={dateFormat}
          onChange={(e) => setDateFormat(e.target.value)}
        >
          <option value="MM/DD/YYYY">MM/DD/YYYY</option>
          <option value="DD/MM/YYYY">DD/MM/YYYY</option>
        </select>
      </div>
      <div className="personalinfoform-group">
        <label htmlFor="timeFormat">
          <FaClock style={{ marginRight: '5px',color:'#4BAF47' }} />
          Time Format
        </label>
        <select
          id="timeFormat"
          value={timeFormat}
          onChange={(e) => setTimeFormat(e.target.value)}
        >
          <option value="12h (am/pm)">12h (am/pm)</option>
          <option value="24h">24h</option>
        </select>
      </div>
      <div className="personalinfoform-group">
        <label htmlFor="country">
          <FaGlobe style={{ marginRight: '5px',color:'#4BAF47' }} />
          Country
        </label>
        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
        </select>
      </div>
      <div className="personalinfoform-group">
        <label htmlFor="timeZone">
          <FaMapMarkerAlt style={{ marginRight: '5px',color:'#4BAF47' }} />
          Time Zone
        </label>
        <select
          id="timeZone"
          value={timeZone}
          onChange={(e) => setTimeZone(e.target.value)}
        >
          <option value="Central Time - US & Canada">
            Central Time - US & Canada
          </option>
          <option value="Eastern Time - US & Canada">
            Eastern Time - US & Canada
          </option>
        </select>
      </div>
      <div className="personalinfoaction-buttons">
        <button className="personalinfosave-btn" onClick={handleSave}>
          <FaSave style={{ marginRight: '5px'}} /> Save Changes
        </button>
        <button className="personalinfodelete-btn" onClick={handleDelete}>
          <FaTrashAlt style={{ marginRight: '5px'}} /> Delete Account
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
