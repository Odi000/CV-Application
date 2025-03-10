import { Input } from "./PersonalDetails";
import studentCap from "../../assets/graduation.png";
import bin from "../../assets/delete.svg";
import chevron from "../../assets/chevron.png"


function Education() {
    return (
        <div className="education">
            <h2>
                <div>
                <img src={studentCap} /> 
                <span>Education</span>
                </div>
                <img src={chevron}/>
                </h2>
            <AddEducationBtn></AddEducationBtn>
            <AddEducationForm></AddEducationForm>
        </div>
    )
}

function AddEducationBtn() {
    return <button>+&nbsp;&nbsp;Education</button>
}

function AddEducationForm() {
    return (
        <form onSubmit={e => e.preventDefault()}>
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