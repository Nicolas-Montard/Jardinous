import React from "react";
import FormCreateOffre from "../components/FormCreateOffre";
import '../css/Form.css';

function CreateOffer() {
    return (
        <div className="form-wrapper">
            <h1 className="bold green">Créer une offre</h1>
            <FormCreateOffre/>
        </div>
    );
}

export default CreateOffer;