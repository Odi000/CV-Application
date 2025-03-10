function PersonalDetails() {
    return (
        <form className="personal-details" onSubmit={e => e.preventDefault()}>
            <h1>Personal Details</h1>
            <Input
                id={"full-name"}
                type={"text"}
                title={"Full name"}
                placeHolder={"First and last name"}
            ></Input>
            <Input
                id={"email"}
                type={"email"}
                title={"Email"}
                placeHolder={"Enter email"}
                recommended={true}
            ></Input>
            <Input
                id={"phone-number"}
                type={"tel"}
                title={"Phone number"}
                placeHolder={"Enter phone number"}
                recommended={true}
            ></Input>
            <Input
                id={"address"}
                type={"text"}
                title={"Address"}
                placeHolder={"City, Country"}
            ></Input>
        </form>
    )
}

export function Input({ id, type, title, placeHolder, recommended }) {
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