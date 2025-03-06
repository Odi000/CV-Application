

export default function EducationSection({ educations }) {
    return (
        <section>
            <h1>Education</h1>
            {educations.map(education => (
                <EducationInfo
                    key={education.key}
                    startEndDate={education.startEndDate}
                    location={education.location}
                    school={education.school}
                    degree={education.degree}
                ></EducationInfo>
            ))}
        </section>
    )
}

function EducationInfo({ startEndDate, location, school, degree }) {
    return (
        <div>
            <div>
                <p>{startEndDate}</p>
                <p>{location}</p>
            </div>
            <div>
                <p>{school}</p>
                <p>{degree}</p>
            </div>
        </div>
    )
}