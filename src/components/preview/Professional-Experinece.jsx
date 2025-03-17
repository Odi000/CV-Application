export default function ExperienceSection({ experiences }) {
    return (
        <section>
            <h3>Professional Experience</h3>
            {experiences.map(experience => (
                <ProExperience
                    key={experience.key}
                    startEndDate={experience.startEndDate}
                    location={experience.location}
                    company={experience.company}
                    position={experience.position}
                    description={experience.description}
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
                <p className="company">{company}</p>
                <p>{position}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}