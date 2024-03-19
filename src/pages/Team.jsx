import '../styles/team.css';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';
import TeamHeader from '../components/TeamHeader';
import teamNum2 from '/media/02climb.png';
import Footer from '../components/Footer';

export default function Team(props) {
  const location = useLocation();

  return (
    <>
      <div className="team-container">
        <div className="team-climb-section">
          <img src={teamNum2} alt="log2" />
          <p>
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.{' '}
          </p>
          {/* <div className="footer-container"></div> */}
        </div>
        <TeamHeader />
        <div
          className="schedule-img-container"
          style={{ backgroundImage: props.style }}
        >
          <div className="image-container">
            <img src={props.scheduleImg} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
