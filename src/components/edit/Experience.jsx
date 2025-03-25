import { useState } from "react";
import { Input, Textarea } from "./PersonalDetails";
import { JobRecord } from "../../App";
import { formatDate } from "./functions";
import { ListItem } from "./Education";
import briefcase from "../../assets/briefcase.png";
import bin from "../../assets/delete.svg";
import chevron from "../../assets/chevron.png"

export default function Experience({
    expList,
    setExpList,
    activeModule,
    setActiveModule,
    company, setCompany,
    position, setPosition,
    expStartDate, setExpStartDate,
    expEndDate, setExpEndDate,
    expLocation, setExpLocation,
    expDescription, setExpDescription
}) {
    const [openForm, setOpenForm] = useState({ isIt: false, education: undefined });
    const isActive = activeModule === 1;
    const expHooks = {
        setCompany,
        setPosition,
        setExpStartDate,
        setExpEndDate,
        setExpLocation,
        setExpDescription
    }

    return (
        <div className="experience">
            <h2
                onClick={() => {
                    isActive ?
                        (setActiveModule(2), setOpenForm({ isIt: false, education: undefined })) :
                        (setActiveModule(1), setOpenForm({ isIt: false, education: undefined }));
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
                expList={expList}
                isActive={isActive}
                isFormOpen={openForm}
                setOpenForm={setOpenForm}
                expHooks={expHooks}
            ></ExperienceMenu>
            <ExperienceFrom
                expList={expList}
                setExpList={setExpList}
                openForm={openForm}
                isActive={isActive}
                setOpenForm={setOpenForm}
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

function ExperienceMenu({ isActive, expList, isFormOpen, setOpenForm, expHooks }) {
    return (
        <div className={isActive && !isFormOpen.isIt ? "list visible" : "list"}>
            <ul>
                {expList.map(experience => {
                    return (
                        <ListItem
                            key={experience.key}
                            listElement={experience}
                            content={experience.company}
                            setOpenForm={setOpenForm}
                            hooks={expHooks}
                            form={"experience"}
                        ></ListItem>
                    )
                    // return <li key={experience.key}>{experience.company}</li>
                })}
            </ul>
            <button onClick={() => setOpenForm({ isIt: true, education: undefined })}>+&nbsp;&nbsp;Experience</button>
        </div>

    )
}

function ExperienceFrom({
    expList,
    setExpList,
    openForm,
    isActive,
    setOpenForm,
    company, setCompany,
    position, setPosition,
    expStartDate, setExpStartDate,
    expEndDate, setExpEndDate,
    expLocation, setExpLocation,
    expDescription, setExpDescription
}) {
    return (
        <form
            className={openForm.isIt && isActive ? "show" : undefined}
            onSubmit={e => e.preventDefault()}
        >
            <Input
                id={"company-name"}
                type={"text"}
                title={"Company Name"}
                placeHolder={"Enter company name"}
                value={company}
                hook={setCompany}
            ></Input>
            <Input
                id={"position-title"}
                type={"text"}
                title={"Position Title"}
                placeHolder={"Enter position title"}
                value={position}
                hook={setPosition}
            ></Input>
            <div className="dates">
                <Input
                    id={"start-date1"}
                    type={"date"}
                    title={"Start Date"}
                    placeHolder={"Enter start date"}
                    value={expStartDate}
                    hook={setExpStartDate}

                ></Input>
                <Input
                    id={"end-date1"}
                    type={"date"}
                    title={"End Date"}
                    placeHolder={"Enter end date"}
                    value={expEndDate}
                    hook={setExpEndDate}

                ></Input>
            </div>
            <Input
                id={"location1"}
                type={"text"}
                title={"Location"}
                placeHolder={"Enter Location"}
                value={expLocation}
                hook={setExpLocation}
            ></Input>
            <Textarea
                id={"description"}
                placeHolder={"Enter description"}
                title={"Description"}
                value={expDescription}
                hook={setExpDescription}
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
                                formatDate(expStartDate),
                                formatDate(expEndDate, true),
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