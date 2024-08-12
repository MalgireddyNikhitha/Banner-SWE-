import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Banner = () => {
  const [bannerData, setBannerData] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/api/banner')
      .then(response => {
        const { description, timer, link } = response.data;
        setBannerData({ description, link });
        setTimeLeft(timer);
      });

    const countdown = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  if (timeLeft === 0) return null;

  return (
    <div className="banner">
      <p>{bannerData.description}</p>
      <p>Time Left: {timeLeft}s</p>
      {bannerData.link && <a href={bannerData.link}>Click Here</a>}
    </div>
  );
};

export default Banner;
