import { useState } from "react";
import './styles/App.css';
import ClearAndLoad from './components/edit/ClearAndLoad';
import PersonalDetails from './components/edit/PersonalDetails';
import Education from './components/edit/Education';
import Experience from './components/edit/Experience';
import Header from './components/preview/Header';
import EducationSection from './components/preview/Education-Preview';
import ExperienceSection from './components/preview/Professional-Experinece';

const headerData = {
	name: "Josephine Meyers",
	email: "josephine.meyers@mail.co.uk",
	phone: "+44 3245 5521 5521",
	address: "London, UK"
};

const eduData = {
	key: crypto.randomUUID(),
	startEndDate: "08/2020 – present",
	location: "New York City, US",
	school: "London City University",
	degree: "Bachelors in Economics"
};

const eduData2 = {
	key: crypto.randomUUID(),
	startEndDate: "08/2020 – present",
	location: "New York City, US",
	school: "London City University",
	degree: "Bachelors in Economics"
};

const expData1 = {
	key: crypto.randomUUID(),
	startEndDate: "08/2020 – present",
	location: "New York City, US",
	company: "Umbrella Inc.",
	position: "UX & UI Designer",
	decription: "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android"
};

const expData2 = {
	key: crypto.randomUUID(),
	startEndDate: "04/2018 – 02/2019",
	location: "Berlin, Germany",
	company: "Black Mesa Labs",
	position: "UX Research Assistant",
	decription: "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers."
};

const experiences = [expData1, expData2];

function App() {
	//Personal Details state
	const [fullName, setFullName] = useState(headerData.name);
	const [email, setEmail] = useState(headerData.email);
	const [phone, setPhone] = useState(headerData.phone);
	const [address, setAddress] = useState(headerData.address);

	//Education state
	const [eduList, setEduList] = useState([eduData, eduData2]);

	//Experience state
	const [expList, setExpList] = useState(experiences);

	//Change between Education and Experience
	const [activeModule, setActiveModule] = useState(2);

	function updateValue(e, hook) {
		hook(e.target.value)
	}

	return (
		<>
			<div className="edit">
				<ClearAndLoad></ClearAndLoad>
				<PersonalDetails
					fullName={fullName}
					setFullName={setFullName}
					email={email}
					setEmail={setEmail}
					phone={phone}
					setPhone={setPhone}
					address={address}
					setAddress={setAddress}
					updateValue={updateValue}
				></PersonalDetails>
				<Education
					eduList={eduList}
					activeModule={activeModule}
					setActiveModule={setActiveModule}
				></Education>
				<Experience
					expList={expList}
					activeModule={activeModule}
					setActiveModule={setActiveModule}
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