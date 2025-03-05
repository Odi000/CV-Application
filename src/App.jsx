import './styles/App.css';
import ClearAndLoad from './components/edit/ClearAndLoad';
import PersonalDetails from './components/edit/PersonalDetails';
import Education from './components/edit/Education';
import Experience from './components/edit/experience';

function App() {
  return (
    <>
      <div className="edit">
      <ClearAndLoad></ClearAndLoad>
      <PersonalDetails></PersonalDetails>
      <Education></Education>
      <Experience></Experience>
      </div>
      <div className="preview">

      </div>
    </>
  )
}

export default App