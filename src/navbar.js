import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEdit, faUsers, faShareAlt, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [name, setName] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://qa.corider.in/assignment/chat?page=0');
      const { name, from, to } = response.data;
      setName(name);
      setFrom(from);
      setTo(to);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul>
          <div className="navbar-name">
            
            <div className="circle-icon"></div>
            <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '5px' }} />
            {name}
            <button className="edit-icon">
            <FontAwesomeIcon icon={faEdit} style={{ marginLeft: '5px', marginRight: '5px' }} id="edit_icon"/>
            </button>
            
            
          </div>
          <div className="navbar-from">
            <div className="from-text">
            <div className="to-text">
              <span id="to">To </span>
              <span id="to_tx">{to}</span>
            </div>
            <div className="navbar-menu" onClick={handleMenuClick}>
              <div className="navbar-menu-icon">
                <div className={`dot${showMenu ? ' active' : ''}`}></div>
                <div className={`dot${showMenu ? ' active' : ''}`}></div>
                <div className={`dot${showMenu ? ' active' : ''}`}></div>
              </div>
              {showMenu && (
                <div className="menu-dropdown">
                  <div className="menu-item">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: '5px' }} />
                    Members
                  </div>
                  <div className="menu-item">
                    <FontAwesomeIcon icon={faShareAlt} style={{ marginRight: '5px' }} />
                    Share Number
                  </div>
                  <div className="menu-item">
                    <FontAwesomeIcon icon={faExclamationTriangle} style={{ marginRight: '5px' }} />
                    Report
                  </div>
                </div>
              )}
            </div>
              <span id="form_tx">From </span>
              <span id="from">{from}</span>
            </div>
            
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
