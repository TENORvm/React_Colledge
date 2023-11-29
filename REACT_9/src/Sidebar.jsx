import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Sidebar = () => {
  const { isSideBarOpen, closeSideBar } = useAppContext();

  return (
    <aside className={`sidebar ${isSideBarOpen && 'show-sidebar'}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>
              {link.icon} {link.text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="social-icons">
        {social.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{getSocialIcon(link.icon)}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

const getSocialIcon = (icon) => {
  switch (icon) {
    case 'FaFacebook':
      return <FaFacebook />;
    case 'FaTwitter':
      return <FaTwitter />;
    case 'FaInstagram':
      return <FaInstagram />;
    case 'FaLinkedin':
      return <FaLinkedin />;
    default:
      return null;
  }
};

export default Sidebar;
