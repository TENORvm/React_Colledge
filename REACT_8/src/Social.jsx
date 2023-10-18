import React from 'react';
import { socialData } from './data'; // Підключаємо файли з даними

const SocialMedia = () => {
  return (
    <div className="social-media">
      <ul className="social-icons">
        {socialData.map((social, index) => (
          <li key={index}>
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
