import '../styles/home.css';
import Header from '../components/Header';

//logos
import homeLogo from '/media/logo.png';
import teamLogo from '/media/Logo_wMountains.png';

//pages
import Team from './Team';
import History from './History';
import Mountain1 from './Mountain1';
import Mountain2 from './Mountain2';
// console.log(location.pathname);

export default function Home() {
  return (
    <div className="home-container">
      <Header logo={homeLogo} />
      <History />
      <Team />
    </div>
  );
}
