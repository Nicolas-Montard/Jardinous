import React, {useState} from 'react';
import '../css/Form.css';
import {useNavigate} from "react-router";

function FormDelete({id, onDelete}) {
    const [selected, setSelected] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selected === "delete") {
            onDelete(id);
        } else if (selected === "cancel") {
            navigate("/");
        }
    };
    return (
        <form onSubmit={handleSubmit} className="delete-offre">
            <h1>Supprimer l'offre ?</h1>
            <div className="radio-form-wrapper">
                <div className="radio-wrapper">
                    <input type="radio" id="delete" name="deleteOffre" value="delete" onChange={() => setSelected("delete")} />
                    <label htmlFor="delete">Supprimer</label>
                </div>
                <div className="radio-wrapper">
                    <input type="radio" id="cancel" name="deleteOffre" value="cancel" onChange={() => setSelected("cancel")} />
                    <label htmlFor="cancel">Annuler</label>
                </div>
            </div>

            <input className="btn-brown" type="submit" value="Save"/>
        </form>
    );
}

export default FormDelete;