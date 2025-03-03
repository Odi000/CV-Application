import './styles/App.css';
import ClearAndLoad from './components/ClearAndLoad';
import PersonalDetails from './components/PersonalDetails';
import Education from './components/Education';
import Experience from './components/experience';

function App() {
  return (
    <>
      <div className="edit"></div>
      <ClearAndLoad></ClearAndLoad>
      <PersonalDetails></PersonalDetails>
      <Education></Education>
      <Experience></Experience>
      <div className="preview"></div>
    </>
  )
}

export default App