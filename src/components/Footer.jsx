import footerLogo from '/media/footerLogo.png';
import copyRightLogo from '/media/copy.png';
import { NavLink } from 'react-router-dom';
import '../styles/footer.css';
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-menu-container">
        <div>
          <NavLink to="/">
            <img src={footerLogo} alt="footer logo" />
          </NavLink>
        </div>
        <div>
          <img src={copyRightLogo} alt="copyWright logo" />
        </div>
      </div>
    </div>
  );
}
