import './styles/App.css';
import ClearAndLoad from './components/edit/ClearAndLoad';
import PersonalDetails from './components/edit/PersonalDetails';
import Education from './components/edit/Education';
import Experience from './components/edit/experience';
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
	return (
		<>
			<div className="edit">
				<ClearAndLoad></ClearAndLoad>
				<PersonalDetails></PersonalDetails>
				<Education></Education>
				<Experience></Experience>
			</div>
			<div className="preview">
				<Header
					name={headerData.name}
					email={headerData.email}
					phone={headerData.phone}
					address={headerData.address}
				></Header>
				<EducationSection
					educations={[eduData]}
				></EducationSection>
				<ExperienceSection
					experiences={experiences}
				></ExperienceSection>
			</div>
		</>
	)
}

export default App