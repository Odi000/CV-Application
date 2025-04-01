import bin from "../../assets/delete.svg";
import { experiences, educations, headerData } from "./exampleData";

function ClearAndLoad({ hooks }) {
    return (
        <div className="clear-n-load">
            <ClearResume hooks={hooks}></ClearResume>
            <LoadResume hooks={hooks}></LoadResume>
        </div>
    )
}

function ClearResume({ hooks }) {
    return (
        <button
            onClick={() => {
                for (const key in hooks) {
                    if (key == "setExpList" || key == "setEduList") {
                        hooks[key]([]);
                    } else {
                        hooks[key]("")
                    }
                }
            }}
        ><img src={bin} alt="trashbin" />Clear Resume</button>
    )
}

function LoadResume({ hooks }) {
    return <button
        onClick={() => {
            for (const key in hooks) {
                console.log(educations);
                switch (key) {
                    case "setExpList": {
                        const newArr = []
                        for (const el of experiences) {
                            newArr.push({ ...el });
                        }
                        hooks[key](newArr);
                        break;
                    }
                    case "setEduList": {
                        const newArr = []
                        for (const el of educations) {
                            newArr.push({ ...el })
                        }
                        hooks[key](newArr);
                        break;
                    }
                    case "setFullName":
                        hooks[key](headerData.fullName)
                        break;
                    case "setEmail":
                        hooks[key](headerData.email)
                        break;
                    case "setPhone":
                        hooks[key](headerData.phone)
                        break;
                    case "setAddress":
                        hooks[key](headerData.address)
                        break;
                }
            }
        }}
    >Load Example</button>
}

export default ClearAndLoad;