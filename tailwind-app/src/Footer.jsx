import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const info = `${navigator.userAgent} | ${navigator.platform}`;
    localStorage.setItem('sysInfo', info); 
  }, []);

  return (
    <footer>
      <p>{localStorage.getItem('sysInfo')}</p> {/* Відображення [cite: 131] */}
    </footer>
  );
};

export default Footer;