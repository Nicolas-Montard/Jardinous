import React, {useState} from 'react';
import '../css/Form.css';
import {useNavigate} from "react-router";

function FormDelete({toolId}) {
    const [selectedOption, setSelectedOption] = useState("");
    const navigate = useNavigate();
    const baseUrl = process.env.BASE_URL;

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedOption === "delete") {
            try {
                const response = await fetch(`{$baseURL}/tool/${toolId}`, {
                    method: "DELETE",
                });
                if (!response.ok) throw new Error("Erreur lors de la suppression");
                alert("Offre supprimée avec succès !");
                navigate("/");
            } catch (error) {
                console.error(error);
            }
        }
        else if (selectedOption === "cancel") {
            navigate("/");
        }
    };
    return (
        <form onSubmit={handleSubmit} className="delete-offre">
            <h1>Supprimer l'offre ?</h1>
            <div className="radio-form-wrapper">
                <div className="radio-wrapper">
                    <input type="radio" id="delete" name="deleteOffre" value="delete" onChange={handleOptionChange} />
                    <label htmlFor="delete">Supprimer</label>
                </div>
                <div className="radio-wrapper">
                    <input type="radio" id="cancel" name="deleteOffre" value="cancel" onChange={handleOptionChange} />
                    <label htmlFor="cancel">Annuler</label>
                </div>
            </div>

            <input className="btn-brown" type="submit" value="Save"/>
        </form>
    );
}

export default FormDelete;