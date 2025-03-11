import { useState } from "react";
import { Input } from "./PersonalDetails";
import briefcase from "../../assets/briefcase.png";
import bin from "../../assets/delete.svg";
import chevron from "../../assets/chevron.png"

export default function Experience({ expList, activeModule, setActiveModule }) {
    const [openForm, setOpenForm] = useState(false);
    const isActive = activeModule === 1;

    return (
        <div className="experience">
            <h2 onClick={() => isActive ? setActiveModule(2) : setActiveModule(1)}>
                <div>
                    <img src={briefcase} />
                    <span>Experience</span>
                </div>
                <img
                    src={chevron}
                    className={isActive ? "rotate" : undefined}
                />
            </h2>
            <ExperienceMenu
                isActive={isActive}
                expList={expList}
                isFormOpen={openForm}
                setOpenForm={setOpenForm}
            ></ExperienceMenu>
            <ExperienceFrom
                openForm={openForm}
            ></ExperienceFrom>
        </div>
    )
}

function ExperienceMenu({ isActive, expList, isFormOpen, setOpenForm }) {
    return (
        <div className={isActive && !isFormOpen ? "list visible" : "list"}>
            <ul>
                {expList.map(experience => {
                    return <li key={experience.key}>{experience.company}</li>
                })}
            </ul>
            <button onClick={() => setOpenForm(true)}>+&nbsp;&nbsp;Experience</button>
        </div>

    )
}

function ExperienceFrom({ openForm }) {
    return (
        <form
            className={openForm ? "show" : undefined}
            onSubmit={e => e.preventDefault()}
        >
            <Input
                id={"company-name"}
                type={"text"}
                title={"Company Name"}
                placeHolder={"Enter company name"}
            ></Input>
            <Input
                id={"position-title"}
                type={"text"}
                title={"Position Title"}
                placeHolder={"Enter position title"}
            ></Input>
            <div className="dates">
                <Input
                    id={"start-date1"}
                    type={"date"}
                    title={"Start Date"}
                    placeHolder={"Enter start date"}
                ></Input>
                <Input
                    id={"end-date1"}
                    type={"date"}
                    title={"End Date"}
                    placeHolder={"Enter end date"}
                ></Input>
            </div>
            <Input
                id={"location1"}
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