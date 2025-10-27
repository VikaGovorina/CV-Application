import { useState } from "react";

function GeneralInfo() {
    const [isEditing, setIsEditing] = useState(true);
    const [info, setInfo] = useState({name: "", email: "", phoneNumber: ""});

    const checkString = (str) => {
        return str && str.length > 0 ? str : "none";
    }

    const onClickBtn = (e) => {
        e.preventDefault();
        if (isEditing) {
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const tel = document.getElementById("tel");
            setInfo({
                name: name.value,
                email: email.value,
                phoneNumber: tel.value
            });
        }

        setIsEditing(!isEditing);
    };

    return (
        <div className="container">
            <h2>General Information</h2>   

            {isEditing ? (
                <form onSubmit={onClickBtn}>
                    <div className="formItem">
                        <label for="name">Name: </label>
                        <input type="text" id="name" placeholder="Name" defaultValue={info.name} required/>
                    </div>

                    <div className="formItem">
                        <label for="email">Email: </label>
                        <input type="email" id="email" placeholder="Email" defaultValue={info.email} required/>
                    </div>

                    <div className="formItem">
                        <label for="tel">Phone Number: </label>
                        <input type="tel" id="tel" placeholder="Phone Number" defaultValue={info.phoneNumber} required/>
                    </div>

                    <button type="submit">Save</button>
                </form>
            ) : (
                <div className="information">
                    <div className="infoItem">
                        <strong>Name: </strong>
                        <span>{checkString(info.name)}</span>
                    </div>
                    <div className="infoItem">
                        <strong>Email: </strong>
                        <span>{checkString(info.email)}</span>
                    </div>
                    <div className="infoItem">
                        <strong>Phone Number: </strong>
                        <span>{checkString(info.phoneNumber)}</span>
                    </div>

                    <button onClick={onClickBtn}>Edit</button>
                </div>
            )} 

        </div>
    );
}

export default GeneralInfo;