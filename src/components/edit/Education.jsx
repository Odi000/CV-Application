import { useState } from "react";
import { Input } from "./PersonalDetails";
import studentCap from "../../assets/graduation.png";
import bin from "../../assets/delete.svg";
import chevron from "../../assets/chevron.png";
import { EduRecord } from "../../App";


function Education({
    eduList,
    activeModule,
    setActiveModule,
    updateValue,
    setEduList,
    school,
    setSchool,
    degree,
    setDegree,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    location,
    setLocation
}) {
    const [openForm, setOpenForm] = useState(false);
    const isActive = activeModule === 0;

    return (
        <div className="education">
            <h2
                onClick={() => {
                    isActive ?
                        (setActiveModule(2), setOpenForm(false)) :
                        (setActiveModule(0), setOpenForm(false));
                }}
            >
                <div>
                    <img src={studentCap} />
                    <span>Education</span>
                </div>
                <img
                    src={chevron}
                    className={isActive ? "rotate" : undefined}
                />
            </h2>
            <EducationMenu
                eduList={eduList}
                isActive={isActive}
                isFormOpen={openForm}
                setOpenForm={setOpenForm}
            ></EducationMenu>
            <AddEducationForm
                openForm={openForm}
                isActive={isActive}
                setOpenForm={setOpenForm}
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
            ></AddEducationForm>
        </div>
    )
}

function EducationMenu({ isActive, eduList, isFormOpen, setOpenForm }) {
    return (
        <div className={isActive && !isFormOpen ? "list visible" : "list"}>
            <ul>
                {eduList.map(education => {
                    return <li key={education.key}>{education.school}</li>
                })}
            </ul>
            <button onClick={() => setOpenForm(true)}>+&nbsp;&nbsp;Education</button>
        </div>
    )
}

function AddEducationForm({
    openForm,
    isActive,
    setOpenForm,
    eduList,
    updateValue,
    setEduList,
    school,
    setSchool,
    degree,
    setDegree,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    location,
    setLocation
}) {
    return (
        <form
            className={openForm && isActive ? "show" : undefined}
            onSubmit={e => e.preventDefault()}
        >
            <Input
                id={"school"}
                type={"text"}
                title={"School"}
                placeHolder={"Enter school / University"}
                value={school}
                hook={setSchool}
                updateValue={updateValue}
            ></Input>
            <Input
                id={"degree"}
                type={"text"}
                title={"Degree"}
                placeHolder={"Enter degree / Field of study"}
                value={degree}
                hook={setDegree}
                updateValue={updateValue}
            ></Input>
            <div className="dates">
                <Input
                    id={"start-date"}
                    type={"date"}
                    title={"Start Date"}
                    placeHolder={"Enter start date"}
                    value={startDate}
                    hook={setStartDate}
                    updateValue={updateValue}
                ></Input>
                <Input
                    id={"end-date"}
                    type={"date"}
                    title={"End Date"}
                    placeHolder={"Enter end date"}
                    value={endDate}
                    hook={setEndDate}
                    updateValue={updateValue}
                ></Input>
            </div>
            <Input
                id={"location"}
                type={"text"}
                title={"Location"}
                placeHolder={"Enter Location"}
                value={location}
                hook={setLocation}
                updateValue={updateValue}
            ></Input>

            <div className="buttons">
                <button className="delete"><img src={bin} />Delete</button>
                <div>
                    <button onClick={() => {
                        setSchool("");
                        setDegree("");
                        setStartDate("");
                        setEndDate("");
                        setLocation("");
                        setOpenForm(false)
                    }}>Cancel</button>
                    <button
                        className="save"
                        onClick={() => {
                            const newEdu = new EduRecord(
                                school,
                                degree,
                                location,
                                startDate,
                                endDate,
                            )

                            setEduList([...eduList, newEdu]);
                        }}
                    >Save</button>
                </div>
            </div>
        </form>
    )
}

export default Education;