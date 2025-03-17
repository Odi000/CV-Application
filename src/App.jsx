import { useState } from "react";
import './styles/App.css';
import ClearAndLoad from './components/edit/ClearAndLoad';
import PersonalDetails from './components/edit/PersonalDetails';
import Education from './components/edit/Education';
import Experience from './components/edit/Experience';
import Header from './components/preview/Header';
import EducationSection from './components/preview/Education-Preview';
import ExperienceSection from './components/preview/Professional-Experinece';

export class JobRecord {
	constructor(company, position, location, startDate, endDate, description) {
		this.key = crypto.randomUUID();
		this.company = company;
		this.position = position;
		this.location = location;
		this.startEndDate = `${startDate} – ${endDate}`;
		this.description = description;
	}
}

export class EduRecord {
	constructor(school, degree, location, startDate, endDate) {
		this.key = crypto.randomUUID();
		this.school = school;
		this.degree = degree;
		this.location = location;
		this.startEndDate = `${startDate} – ${endDate}`;
	}
}

const headerData = {
	name: "Josephine Meyers",
	email: "josephine.meyers@mail.co.uk",
	phone: "+44 3245 5521 5521",
	address: "London, UK"
};

const eduData = new EduRecord(
	"London City University",
	"Bachelors in Economics",
	"New York City, US",
	"08/2020",
	"present",
);

const eduData2 = new EduRecord(
	"London City University",
	"Bachelors in Economics",
	"New York City, US",
	"08/2020",
	"present",
);

const expData1 = new JobRecord(
	"Umbrella Inc.",
	"UX & UI Designer",
	"New York City, US",
	"08/2020",
	"present",
	"Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android"
)

const expData2 = new JobRecord(
	"Black Mesa Labs",
	"UX Research Assistant",
	"Berlin, Germany",
	"04/2018",
	"02/2019",
	"Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers."
);

const experiences = [expData1, expData2];

function App() {
	//Personal Details state
	const [fullName, setFullName] = useState(headerData.name);
	const [email, setEmail] = useState(headerData.email);
	const [phone, setPhone] = useState(headerData.phone);
	const [address, setAddress] = useState(headerData.address);

	//Education state
	const [eduList, setEduList] = useState([eduData, eduData2]);
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
					activeModule={activeModule}
					setActiveModule={setActiveModule}
					updateValue={updateValue}
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
					updateValue={updateValue}
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