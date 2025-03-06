import mail from "../../assets/envelope.png";
import telephone from "../../assets/telephone.png";
import pin from "../../assets/pin.png";



export default function Header({ name, email, phone, address }) {
    return (
        <header>
            <h1>{name}</h1>
            <div className="contacts">
                <div>
                    <img src={mail} />
                    <p>{email}</p>
                </div>
                <div>
                    <img src={telephone} />
                    <p>{phone}</p>
                </div>
                <div>
                    <img src={pin} />
                    <p>{address}</p>
                </div>
            </div>
        </header>
    )
}