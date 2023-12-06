import './App.css';
import NavBar from './NavBar';
import InfoCard from './Components/InfoCard';
import ImageSlider from './ImageSlider';
import Sticker from './Sticker';
import CreatedBy from './Components/CreatedBy';
import Copyright from './Components/Copyright';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Sticker/>
      <ImageSlider/>
      <InfoCard/>
      <CreatedBy/>
      <Copyright/>
    </div>
  );
}

export default App;
