import mail from "../../assets/envelope.png";
import phone from "../../assets/telephone.png";
import pin from "../../assets/pin.png";

function Header() {
    const genericData = {
        name: "Josephine Meyers",
        email: "josephine.meyers@mail.co.uk",
        phone: "+44 3245 5521 5521",
        address: "London, UK"
    }
    return (
        <header>
            <h1>{genericData.name}</h1>
            <div className="contacts">
                <div>
                    <img src={mail} />
                    <p>{genericData.email}</p>
                </div>
                <div>
                    <img src={phone} />
                    <p>{genericData.phone}</p>
                </div>
                <div>
                    <img src={pin} />
                    <p>{genericData.address}</p>
                </div>
            </div>
        </header>
    )
}