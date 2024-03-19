import Team from './Team';
import '../styles/mountain2.css';
import scheduleImg1 from '/media/schedule-content.png';
import backgroundImage from '/media/tab2.png';
export default function Mountain2() {
  return (
    <>
      <Team scheduleImg={scheduleImg1} style={`url(${backgroundImage})`} />
    </>
  );
}
