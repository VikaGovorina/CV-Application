import { useState } from "react";

function EducationalExperience() {
    const [isEditing, setIsEditing] = useState(true);
    const [info, setInfo] = useState({studyName: "", study: "", from: "", to: ""});

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
            const studyName = document.getElementById("studyName");
            const study = document.getElementById("study");
            const from = document.getElementById("from");
            const to = document.getElementById("to");
            setInfo({
                studyName: studyName.value,
                study: study.value,
                from: from.value,
                to: to.value
            });
        }

        setIsEditing(!isEditing);
    };

    return (
        <div className="container">
            <h2>Educational Experience</h2>   

            {isEditing ? (
                <form onSubmit={onClickBtn}>
                    <div className="formItem">
                        <label for="studyName">School Name: </label>
                        <input type="text" id="studyName" placeholder="School Name" defaultValue={info.studyName} required/>
                    </div>

                    <div className="formItem">
                        <label for="study">Study Title: </label>
                        <input type="text" id="study" placeholder="Study Title" defaultValue={info.study} required/>
                    </div>

                    <div className="formItem">
                        <label for="from">Studied from: </label>
                        <input type="date" id="from" defaultValue={info.from} required/>
                    </div>

                    <div className="formItem">
                        <label for="to">To: </label>
                        <input type="date" id="to" defaultValue={info.to}/>
                    </div>

                    <button type="submit">Save</button>
                </form>
            ) : (
                <div className="information">
                    <div className="infoItem">
                        <strong>Name: </strong>
                        <span>{checkString(info.studyName)}</span>
                    </div>
                    <div className="infoItem">
                        <strong>Study Title: </strong>
                        <span>{checkString(info.study)}</span>
                    </div>
                    <div className="infoItem">
                        <strong>Studied from: </strong>
                        <span>{checkString(formatDate(info.from))}</span>
                    </div>
                    <div className="infoItem">
                        <strong>To: </strong>
                        <span>{checkString(formatDate(info.to))}</span>
                    </div>

                    <button onClick={onClickBtn}>Edit</button>
                </div>
            )} 

        </div>
    );
}

export default EducationalExperience;