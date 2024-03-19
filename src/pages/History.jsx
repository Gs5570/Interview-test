import '../styles/history.css';
import Header from '../components/Header';
import historyImg from '/media/01history.png';
import { useState } from 'react';

// import 'react-multi-carousel/lib/styles.css';

import MyCarousel from '../components/MyCarousel';
// import SwiperMyCarousel from '../components/SwiperMyCarousel';
import historyLogo from '/media/Logo_wMountains.png';
export default function History() {
  const [whiteNav, setWhiteNav] = useState(true);
  return (
    <div className="history-container">
      {whiteNav && <Header logo={historyLogo} style={'white'} />}
      <div className="text-container" color={'black'}>
        <img src={historyImg} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
          quis exercitationem culpa nesciunt nihil aut nostrum explicabo
          reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
          Voluptatum ducimus voluptates voluptas? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Eligendi non quis exercitationem culpa
          nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab
          temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates
          voluptas?{' '}
        </p>
      </div>
      {/* <div className="caroussal-container"></div> */}
      <MyCarousel />
      {/* <SwiperMyCarousel /> */}
    </div>
  );
}
