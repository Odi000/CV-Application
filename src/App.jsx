import { useState } from "react";
import './styles/App.css';
import ClearAndLoad from './components/edit/ClearAndLoad';
import PersonalDetails from './components/edit/PersonalDetails';
import Education from './components/edit/Education';
import Experience from './components/edit/Experience';
import Header from './components/preview/Header';
import EducationSection from './components/preview/Education-Preview';
import ExperienceSection from './components/preview/Professional-Experinece';
import { headerData, experiences, educations } from "./components/edit/exampleData";

function App() {
	//Personal Details state
	const [fullName, setFullName] = useState(headerData.fullName);
	const [email, setEmail] = useState(headerData.email);
	const [phone, setPhone] = useState(headerData.phone);
	const [address, setAddress] = useState(headerData.address);

	//Education state
	const [eduList, setEduList] = useState(educations);
	const [school, setSchool] = useState("");
	const [degree, setDegree] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [location, setLocation] = useState("");

	//Experience state
	const [expList, setExpList] = useState(experiences);
	const [company, setCompany] = useState("");
	const [position, setPosition] = useState("");
	const [expStartDate, setExpStartDate] = useState("");
	const [expEndDate, setExpEndDate] = useState("");
	const [expLocation, setExpLocation] = useState("");
	const [expDescription, setExpDescription] = useState("");

	//Change between Education and Experience
	const [activeModule, setActiveModule] = useState(2);

	return (
		<>
			<div className="edit">
				<ClearAndLoad
					hooks={{
						setFullName,
						setEmail,
						setPhone,
						setAddress,
						setEduList,
						setExpList
					}}
				></ClearAndLoad>
				<PersonalDetails
					fullName={fullName}
					setFullName={setFullName}
					email={email}
					setEmail={setEmail}
					phone={phone}
					setPhone={setPhone}
					address={address}
					setAddress={setAddress}
				></PersonalDetails>
				<Education
					activeModule={activeModule}
					setActiveModule={setActiveModule}
					eduList={eduList}
					setEduList={setEduList}
					school={school}
					setSchool={setSchool}
					degree={degree}
					setDegree={setDegree}
					startDate={startDate}
					setStartDate={setStartDate}
					endDate={endDate}
					setEndDate={setEndDate}
					location={location}
					setLocation={setLocation}
				></Education>
				<Experience
					activeModule={activeModule}
					setActiveModule={setActiveModule}
					expList={expList}
					setExpList={setExpList}
					company={company}
					setCompany={setCompany}
					position={position}
					setPosition={setPosition}
					expStartDate={expStartDate}
					setExpStartDate={setExpStartDate}
					expEndDate={expEndDate}
					setExpEndDate={setExpEndDate}
					expLocation={expLocation}
					setExpLocation={setExpLocation}
					expDescription={expDescription}
					setExpDescription={setExpDescription}
				></Experience>
			</div>
			<div className="preview">
				<Header
					name={fullName}
					email={email}
					phone={phone}
					address={address}
				></Header>
				<EducationSection
					educations={eduList}
				></EducationSection>
				<ExperienceSection
					experiences={expList}
				></ExperienceSection>
			</div>
		</>
	)
}

export default App