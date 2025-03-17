import { useState } from "react";
import { Input, Textarea } from "./PersonalDetails";
import { JobRecord } from "../../App";
import briefcase from "../../assets/briefcase.png";
import bin from "../../assets/delete.svg";
import chevron from "../../assets/chevron.png"

export default function Experience({
    expList,
    setExpList,
    activeModule,
    setActiveModule,
    updateValue,
    company, setCompany,
    position, setPosition,
    expStartDate, setExpStartDate,
    expEndDate, setExpEndDate,
    expLocation, setExpLocation,
    expDescription, setExpDescription
}) {
    const [openForm, setOpenForm] = useState(false);
    const isActive = activeModule === 1;

    return (
        <div className="experience">
            <h2
                onClick={() => {
                    isActive ?
                        (setActiveModule(2), setOpenForm(false)) :
                        (setActiveModule(1), setOpenForm(false));
                }}
            >
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
                expList={expList}
                setExpList={setExpList}
                openForm={openForm}
                isActive={isActive}
                setOpenForm={setOpenForm}
                updateValue={updateValue}
                company={company}
                setCompany={setCompany}
                position={position}
                setPosition={setPosition}
                expStartDate={expStartDate}
                setExpStartDate={setExpStartDate}
                expEndDate={expEndDate}
                setExpEndDate={setExpEndDate}
                expLocation={expLocation}
                setExpLocation={setExpLocation}
                expDescription={expDescription}
                setExpDescription={setExpDescription}
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

function ExperienceFrom({
    expList,
    setExpList,
    openForm,
    isActive,
    setOpenForm,
    updateValue,
    company, setCompany,
    position, setPosition,
    expStartDate, setExpStartDate,
    expEndDate, setExpEndDate,
    expLocation, setExpLocation,
    expDescription, setExpDescription
}) {
    return (
        <form
            className={openForm && isActive ? "show" : undefined}
            onSubmit={e => e.preventDefault()}
        >
            <Input
                id={"company-name"}
                type={"text"}
                title={"Company Name"}
                placeHolder={"Enter company name"}
                value={company}
                hook={setCompany}
                updateValue={updateValue}
            ></Input>
            <Input
                id={"position-title"}
                type={"text"}
                title={"Position Title"}
                placeHolder={"Enter position title"}
                value={position}
                hook={setPosition}
                updateValue={updateValue}
            ></Input>
            <div className="dates">
                <Input
                    id={"start-date1"}
                    type={"date"}
                    title={"Start Date"}
                    placeHolder={"Enter start date"}
                    value={expStartDate}
                    hook={setExpStartDate}
                    updateValue={updateValue}
                ></Input>
                <Input
                    id={"end-date1"}
                    type={"date"}
                    title={"End Date"}
                    placeHolder={"Enter end date"}
                    value={expEndDate}
                    hook={setExpEndDate}
                    updateValue={updateValue}
                ></Input>
            </div>
            <Input
                id={"location1"}
                type={"text"}
                title={"Location"}
                placeHolder={"Enter Location"}
                value={expLocation}
                hook={setExpLocation}
                updateValue={updateValue}
            ></Input>
            <Textarea
                id={"description"}
                placeHolder={"Enter description"}
                title={"Description"}
                value={expDescription}
                hook={setExpDescription}
                updateValue={updateValue}
            ></Textarea>
            <div className="buttons">
                <button className="delete"><img src={bin} />Delete</button>
                <div>
                    <button onClick={() => {
                        setCompany("");
                        setPosition("");
                        setExpStartDate("");
                        setExpEndDate("");
                        setExpLocation("");
                        setExpDescription("");
                        setOpenForm(false);
                    }}>Cancel</button>
                    <button
                        className="save"
                        onClick={() => {
                            const newExp = new JobRecord(
                                company,
                                position,
                                expLocation,
                                expStartDate,
                                expEndDate,
                                expDescription
                            )

                            setExpList([...expList, newExp]);
                        }}
                    >Save</button>
                </div>
            </div>
        </form>
    )
}