export default function ExperienceSection({ experiences }) {
    return (
        <section>
            <h1>Professional Experience</h1>
            {experiences.map(experience => (
                <ProExperience
                    key={experience.key}
                    startEndDate={experience.startEndDate}
                    location={experience.location}
                    company={experience.company}
                    position={experience.position}
                    description={experience.decription}
                ></ProExperience>
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