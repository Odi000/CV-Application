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
    fullName: "Arsène Lupin",
    email: "masterthief@lupiniii.com",
    phone: "+33 724 5521 552",
    address: "Paris, France"
};

const eduData = new EduRecord(
    "London City University",
    "Bachelors in Economics",
    "New York City, US",
    "08/2020",
    "present",
);

const eduData2 = new EduRecord(
    "Gentleman Thief",
    "Master of Disguise and Heists",
    "Global Operations",
    "08/2067",
    "04/2025",
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
const educations = [eduData, eduData2]

export { headerData, experiences, educations }