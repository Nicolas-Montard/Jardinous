import React from "react";
import '../css/Form.css';
import FormCreateCategory from "../components/FormCreateCategory";

function CreateCategory() {
    return (
        <div className="form-wrapper">
            <h1 className="bold green">Créer une catégorie</h1>
            <FormCreateCategory/>
        </div>
    );
}

export default CreateCategory;