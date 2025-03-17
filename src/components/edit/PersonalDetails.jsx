
function PersonalDetails({
    fullName,
    setFullName,
    email,
    setEmail,
    phone,
    setPhone,
    address,
    setAddress,
    updateValue
}) {
    return (
        <form className="personal-details" onSubmit={e => e.preventDefault()}>
            <h1>Personal Details</h1>
            <Input
                id={"full-name"}
                type={"text"}
                title={"Full name"}
                placeHolder={"First and last name"}
                value={fullName}
                updateValue={updateValue}
                hook={setFullName}
            ></Input>
            <Input
                id={"email"}
                type={"email"}
                title={"Email"}
                placeHolder={"Enter email"}
                recommended={true}
                value={email}
                updateValue={updateValue}
                hook={setEmail}
            ></Input>
            <Input
                id={"phone-number"}
                type={"tel"}
                title={"Phone number"}
                placeHolder={"Enter phone number"}
                recommended={true}
                value={phone}
                updateValue={updateValue}
                hook={setPhone}
            ></Input>
            <Input
                id={"address"}
                type={"text"}
                title={"Address"}
                placeHolder={"City, Country"}
                value={address}
                updateValue={updateValue}
                hook={setAddress}
            ></Input>
        </form>
    )
}

export function Input({ id, type, title, placeHolder, recommended, value, updateValue, hook }) {
    return (
        <div className="input-group">
            <label htmlFor={id}>
                <span>{title}</span>
                <span>{recommended ? "recommended" : ""}</span>
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeHolder}
                value={value}
                onChange={(e) => updateValue(e, hook)}
            />
        </div>
    )
}

export function Textarea({ id, title, placeHolder, recommended, value, updateValue, hook }) {
    return (
        <div className="input-group">
            <label htmlFor={id}>
                <span>{title}</span>
                <span>{recommended ? "recommended" : ""}</span>
            </label>
            <textarea
                id={id}
                placeholder={placeHolder}
                value={value}
                onChange={(e) => updateValue(e, hook)}
            ></textarea>
        </div>
    )
}

export default PersonalDetails