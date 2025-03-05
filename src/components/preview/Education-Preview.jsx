function EducationPreview(){
    const genericData = {
        startEndDate: "08/2020 – present",
        location: "New York City, US",
        school: "London City University",
        degree: "Bachelors in Economics"
    }


    return(
        <section>
            <h1>Education</h1>
            <div>
                <div>
                    <p>{genericData.startEndDate}</p>
                    <p>{genericData.location}</p>
                </div>
                <div>
                    <p>{genericData.school}</p>
                    <p>{genericData.degree}</p>
                </div>
            </div>
        </section>
    )
}