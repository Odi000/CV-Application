import './styles/App.css';
import ClearAndLoad from './components/ClearAndLoad';
import PersonalDetails from './components/PersonalDetails';

function App() {
  return (
    <>
      <div className="edit"></div>
      <ClearAndLoad></ClearAndLoad>
      <PersonalDetails></PersonalDetails>
      <div className="preview"></div>
    </>
  )
}

export default App