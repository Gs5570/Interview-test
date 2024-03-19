import { NavLink } from 'react-router-dom';
import '../styles/header.css';
import '../styles/teamHeader.css';

const navLinkStyle = ({ isActive }) => {
  return {
    fontWeight: isActive ? 'bolder' : 'normal',
    backgroundColor: isActive ? 'rgb(240 240 240) ' : 'none',
    textDecoration: isActive ? 'none' : 'none',
    padding: isActive ? '20px' : '0',
    // marginTop: isActive ? '50px' : '0',
    // borderRadius: isActive ? '20px' : '0',
    color: isActive ? 'inherit' : 'black',
  };
};

export default function TeamHeader() {
  return (
    <div className="team-header-container">
      <div className="team-navigation-bar-container">
        <nav>
          <ul className="menu-container">
            <li>
              <NavLink to="/mountain1" style={navLinkStyle}>
                MOUNTAIN 1
              </NavLink>
            </li>
            <li>
              <NavLink to="/mountain2" style={navLinkStyle}>
                MOUNTAIN 2
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
