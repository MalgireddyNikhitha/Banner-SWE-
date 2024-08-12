import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [bannerData, setBannerData] = useState({
    description: '',
    timer: 0,
    link: '',
    isVisible: true
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/banner')
      .then(response => setBannerData(response.data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBannerData(prev => ({ ...prev, [name]: value }));
  };

  const handleToggleVisibility = () => {
    setBannerData(prev => ({ ...prev, isVisible: !prev.isVisible }));
  };

  const handleSubmit = () => {
    axios.post('http://localhost:5000/api/banner', bannerData);
  };

  return (
    <div className="dashboard">
      <h1>Banner Dashboard</h1>
      <label>
        Description:
        <input
          name="description"
          value={bannerData.description}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Timer (seconds):
        <input
          name="timer"
          type="number"
          value={bannerData.timer}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Link:
        <input
          name="link"
          value={bannerData.link}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Visibility:
        <input
          type="checkbox"
          checked={bannerData.isVisible}
          onChange={handleToggleVisibility}
        />
      </label>
      <button onClick={handleSubmit}>Update Banner</button>
    </div>
  );
};

export default Dashboard;
