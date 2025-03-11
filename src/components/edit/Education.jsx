import { useState } from "react";
import { Input } from "./PersonalDetails";
import studentCap from "../../assets/graduation.png";
import bin from "../../assets/delete.svg";
import chevron from "../../assets/chevron.png"


function Education({ eduList, activeModule, setActiveModule }) {
    const [openForm, setOpenForm] = useState(false);
    const isActive = activeModule === 0;

    return (
        <div className="education">
            <h2 onClick={() => isActive ? setActiveModule(2) : setActiveModule(0)}>
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

function AddEducationForm({ openForm }) {
    return (
        <form
            className={openForm ? "show" : undefined}
            onSubmit={e => e.preventDefault()}
        >
            <Input
                id={"school"}
                type={"text"}
                title={"School"}
                placeHolder={"Enter school / University"}
            ></Input>
            <Input
                id={"degree"}
                type={"text"}
                title={"Degree"}
                placeHolder={"Enter degree / Field of study"}
            ></Input>
            <div className="dates">
                <Input
                    id={"start-date"}
                    type={"date"}
                    title={"Start Date"}
                    placeHolder={"Enter start date"}
                ></Input>
                <Input
                    id={"end-date"}
                    type={"date"}
                    title={"End Date"}
                    placeHolder={"Enter end date"}
                ></Input>
            </div>
            <Input
                id={"location"}
                type={"text"}
                title={"Location"}
                placeHolder={"Enter Location"}
            ></Input>

            <div className="buttons">
                <button className="delete"><img src={bin} />Delete</button>
                <div>
                    <button>Cancel</button>
                    <button className="save">Save</button>
                </div>
            </div>
        </form>
    )
}

export default Education;