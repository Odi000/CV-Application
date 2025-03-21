import { useState } from "react";
import { Input } from "./PersonalDetails";
import { EduRecord } from "../../App";
import { formatDate, cancelForm, editSelected } from "./functions";
import studentCap from "../../assets/graduation.png";
import bin from "../../assets/delete.svg";
import chevron from "../../assets/chevron.png";


function Education({
    eduList,
    activeModule,
    setActiveModule,
    setEduList,
    school,
    degree,
    startDate,
    endDate,
    location,
    setSchool,
    setDegree,
    setStartDate,
    setEndDate,
    setLocation
}) {
    const [openForm, setOpenForm] = useState({ isIt: false, education: undefined });
    const isActive = activeModule === 0;
    const eduHooks = {
        setSchool,
        setDegree,
        setStartDate,
        setEndDate,
        setLocation
    }

    return (
        <div className="education">
            <h2
                onClick={() => {
                    isActive ?
                        (setActiveModule(2), setOpenForm({ isIt: false, education: undefined })) :
                        (setActiveModule(0), setOpenForm({ isIt: false, education: undefined }));
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
                eduHooks={eduHooks}
            ></EducationMenu>
            <AddEducationForm
                openForm={openForm}
                setOpenForm={setOpenForm}
                isActive={isActive}
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



function EducationMenu({ isActive, eduList, isFormOpen, setOpenForm, eduHooks }) {
    return (
        <div className={isActive && !isFormOpen.isIt ? "list visible" : "list"}>
            <ul>
                {eduList.map(education => {
                    // return <li key={education.key}>{education.school}</li>
                    return <ListItem
                        key={education.key}
                        eduList={eduList}
                        education={education}
                        content={education.school}
                        setOpenForm={setOpenForm}
                        eduHooks={eduHooks}
                    ></ListItem>
                })}
            </ul>
            <button onClick={() => setOpenForm({ isIt: true, education: undefined })}>+&nbsp;&nbsp;Education</button>
        </div>
    )
}

function ListItem({ setOpenForm, education, content, eduHooks }) {
    return (
        <li
            onClick={() => {
                editSelected(setOpenForm, education, eduHooks);
            }}
        >{content}</li>
    )
}

function AddEducationForm({
    openForm,
    setOpenForm,
    isActive,
    eduList,
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
            className={openForm.isIt && isActive ? "show" : undefined}
            onSubmit={e => e.preventDefault()}
        >
            <Input
                id={"school"}
                type={"text"}
                title={"School"}
                placeHolder={"Enter school / University"}
                value={school}
                hook={setSchool}
            ></Input>
            <Input
                id={"degree"}
                type={"text"}
                title={"Degree"}
                placeHolder={"Enter degree / Field of study"}
                value={degree}
                hook={setDegree}
            ></Input>
            <div className="dates">
                <Input
                    id={"start-date"}
                    type={"date"}
                    title={"Start Date"}
                    placeHolder={"Enter start date"}
                    value={startDate}
                    hook={setStartDate}
                ></Input>
                <Input
                    id={"end-date"}
                    type={"date"}
                    title={"End Date"}
                    placeHolder={"Enter end date"}
                    value={endDate}
                    hook={setEndDate}
                ></Input>
            </div>
            <Input
                id={"location"}
                type={"text"}
                title={"Location"}
                placeHolder={"Enter Location"}
                value={location}
                hook={setLocation}
            ></Input>
            <div className="buttons">
                <button
                    className="delete"
                    onClick={() => {
                        if (openForm.education) {
                            const index = eduList.findIndex((el) => el.key === openForm.education.key);
                            eduList.splice(index, 1);
                            setEduList([...eduList]);
                        }
                        cancelForm({
                            setSchool,
                            setDegree,
                            setStartDate,
                            setEndDate,
                            setLocation,
                            setOpenForm
                        }, "education");
                    }}
                ><img src={bin} />Delete</button>
                <div>
                    <button onClick={() => {
                         cancelForm({
                            setSchool,
                            setDegree,
                            setStartDate,
                            setEndDate,
                            setLocation,
                            setOpenForm
                        }, "education");
                    }}>Cancel</button>
                    <button
                        className="save"
                        onClick={() => {
                            const formatedStDate = formatDate(startDate);
                            const formatedEnDate = formatDate(endDate, true);

                            if (!formatedStDate || !formatedEnDate) {
                                return alert("Date is required!")
                            } else if (openForm.education) {
                                const existingEl = eduList.find((el) => el.key === openForm.education.key);
                                existingEl.school = school;
                                existingEl.degree = degree;
                                existingEl.location = location;
                                existingEl.startEndDate = `${formatedStDate} – ${formatedEnDate}`;
                                setEduList([...eduList]);

                                //Close form after edit
                                cancelForm({
                                    setSchool,
                                    setDegree,
                                    setStartDate,
                                    setEndDate,
                                    setLocation,
                                    setOpenForm
                                }, "education");

                            } else {
                                const newEl = new EduRecord(
                                    school,
                                    degree,
                                    location,
                                    formatedStDate,
                                    formatedEnDate,
                                )
                                setEduList([...eduList, newEl]);

                                //Close form after save
                                cancelForm({
                                    setSchool,
                                    setDegree,
                                    setStartDate,
                                    setEndDate,
                                    setLocation,
                                    setOpenForm
                                }, "education");

                            }
                        }}
                    >Save</button>
                </div>
            </div>
        </form>
    )
}

export default Education;