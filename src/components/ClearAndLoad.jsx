import bin from "../assets/delete.svg";

function ClearAndLoad() {
    return (
        <div>
            <ClearResume></ClearResume>
            <LoadResume></LoadResume>
        </div>
    )
}

function ClearResume() {
    return <button><img src={bin} alt="trashbin" />Clear Resume</button>
}

function LoadResume() {
    return <button>Load Example</button>
}

export default ClearAndLoad;