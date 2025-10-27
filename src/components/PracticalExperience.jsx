import { useState } from "react";

function PracticalExperience() {
    const [isEditing, setIsEditing] = useState(true);
    const [info, setInfo] = useState({companyName: "", position: "", responsibilities: "", companyFrom: "", companyTo: ""});

    const formatDate = (date) => {
        if (!date) return "";
        const formatDate = new Date(date);

        return `${formatDate.getDate()} ${formatDate.toLocaleString('en-US', {month: 'long'})} ${formatDate.getFullYear()}`;
    };

    const checkString = (str) => {
        return str && str.length > 0 ? str : "none";
    }

    const onClickBtn = (e) => {
        e.preventDefault();
        if (isEditing) {
            const companyName = document.getElementById("companyName");
            const position = document.getElementById("position");
            const responsibilities = document.getElementById("responsibilities");
            const companyFrom = document.getElementById("companyFrom");
            const companyTo = document.getElementById("companyTo");
            setInfo({
                companyName: companyName.value,
                position: position.value,
                responsibilities: responsibilities.value,
                companyFrom: companyFrom.value,
                companyTo: companyTo.value
            });
        }

        setIsEditing(!isEditing);
    };

    return (
        <div className="container">
            <h2>Practical Experience</h2>   

            {isEditing ? (
                <form onSubmit={onClickBtn}>
                    <div className="formItem">
                        <label for="companyName">Company Name: </label>
                        <input type="text" id="companyName" placeholder="Company Name" defaultValue={info.companyName}/>
                    </div>

                    <div className="formItem">
                        <label for="position">Position Title: </label>
                        <input type="text" id="position" placeholder="Position Title" defaultValue={info.position}/>
                    </div>

                    <div className="formItem">
                        <label for="responsibilities">Main Responsibilities: </label>
                        <input type="text" id="responsibilities" placeholder="Responsibilities" defaultValue={info.responsibilities}/>
                    </div>

                    <div className="formItem">
                        <label for="companyFrom">Worked from: </label>
                        <input type="date" id="companyFrom" defaultValue={info.companyFrom}/>
                    </div>

                    <div className="formItem">
                        <label for="companyTo">To: </label>
                        <input type="date" id="companyTo" defaultValue={info.companyTo}/>
                    </div>

                    <button type="submit">Save</button>
                </form>
            ) : (
                <div className="information">
                    <div className="infoItem">
                        <strong>Name: </strong>
                        <span>{checkString(info.companyName)}</span>
                    </div>
                    <div className="infoItem">
                        <strong>Position Title: </strong>
                        <span>{checkString(info.position)}</span>
                    </div>
                    <div className="infoItem">
                        <strong>Main Responsibilities: </strong>
                        <span>{checkString(info.responsibilities)}</span>
                    </div>
                    <div className="infoItem">
                        <strong>Worked from: </strong>
                        <span>{checkString(formatDate(info.companyFrom))}</span>
                    </div>
                    <div className="infoItem">
                        <strong>To: </strong>
                        <span>{checkString(formatDate(info.companyTo))}</span>
                    </div>

                    <button onClick={onClickBtn}>Edit</button>
                </div>
            )} 

        </div>
    );
}

export default PracticalExperience;