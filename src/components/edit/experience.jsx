import briefcase from "../../assets/briefcase.png";
import bin from "../../assets/delete.svg";
import { Input } from "./PersonalDetails";

export default function Experience() {
    return (
        <div className="experience">
            <h2><img src={briefcase} /> Experience<span>⌄</span></h2>
            <button>+ Experience</button>
            <ExperienceFrom></ExperienceFrom>
        </div>
    )
}

function ExperienceFrom() {
    return (
        <form onSubmit={e => e.preventDefault()}>
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
            <div>
                <button className="delete"><img src={bin} />Delete</button>
                <div>
                    <button>Cancel</button>
                    <button>Save</button>
                </div>
            </div>
        </form>
    )
}