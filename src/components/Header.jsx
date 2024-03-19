import Logo from '../components/Logo';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';
import { GiAccordion } from 'react-icons/gi';
import { useState, useEffect } from 'react';

export default function Header(props) {
  console.log(window.innerWidth);

  // useScreenSize.js

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="header-container" style={{ backgroundColor: props.style }}>
      <div className="navigation-bar-container">
        <NavLink to="/">
          <Logo logo={props.logo} />
        </NavLink>
        <nav>
          <ul className="menu-container">
            {screenSize.width <= 765 ? (
              <GiAccordion size={50} />
            ) : (
              <li>
                <NavLink to="/history">01. HISTORY </NavLink>
              </li>
            )}
            {screenSize.width <= 765 ? (
              <GiAccordion size={50} />
            ) : (
              <li>
                <NavLink to="/team">02. TEAM</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
