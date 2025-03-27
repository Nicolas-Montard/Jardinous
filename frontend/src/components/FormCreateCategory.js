import React from 'react';
import '../css/Form.css';

function FormCreateCategory() {
    return (
        <form action="" method="POST" className="create-offre">
            <input className="bg-grey input" type="text" name="name" id="name" placeholder="Catégorie" required />
            <input className="btn-brown" type="submit" value="Save"/>
        </form>
    )
}

export default FormCreateCategory;