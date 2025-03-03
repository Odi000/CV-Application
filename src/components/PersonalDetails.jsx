function PersonalDetails() {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <h1>Personal Details</h1>
            <Inputs
                id={"full-name"}
                type={"text"}
                title={"Full name"}
                placeHolder={"First and last name"}
            ></Inputs>
            <Inputs
                id={"email"}
                type={"email"}
                title={"Email"}
                placeHolder={"Enter email"}
            ></Inputs>
            <Inputs
                id={"phone-number"}
                type={"tel"}
                title={"Phone number"}
                placeHolder={"Enter phone number"}
            ></Inputs>
            <Inputs
                id={"address"}
                type={"text"}
                title={"Address"}
                placeHolder={"City, Country"}
            ></Inputs>
        </form>
    )
}

function Inputs({ id, type, title, placeHolder, recommended }) {
    return (
        <div className="input-group">
            <label htmlFor={id}>
                <span>{title}</span>
                <span>{recommended ? "recommended" : ""}</span>
            </label>
            <input type={type} id={id} placeholder={placeHolder} />
        </div>
    )
}

export default PersonalDetails