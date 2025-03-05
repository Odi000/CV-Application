
const genericData1 = {
    key: crypto.randomUUID(),
    startEndDate: "08/2020 – present",
    location: "New York City, US",
    company: "Umbrella Inc.",
    position: "UX & UI Designer",
    decription: "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android"
}

const genericData2 = {
    key: crypto.randomUUID(),
    startEndDate: "04/2018 – 02/2019",
    location: "Berlin, Germany",
    company: "Black Mesa Labs",
    position: "UX Research Assistant",
    decription: "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers."
}

function ExperienceSection({ experiences }) {
    return (
        <section>
            <h1>Education</h1>
            {experiences.map(experience => (
                <ProExperience
                    key={experience.key}
                    startEndDate={experience.startEndDate

                    }></ProExperience>
            ))}
        </section>
    )
}

function ProExperience({ startEndDate, location, company, position, description }) {
    return (
        <div>
            <div>
                <p>{startEndDate}</p>
                <p>{location}</p>
            </div>
            <div>
                <p>{company}</p>
                <p>{position}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}