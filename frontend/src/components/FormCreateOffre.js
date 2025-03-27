import React from 'react';
import '../css/Form.css';

function FormCreateOffre() {
    return (
        <form action="" method="POST" className="create-offre">
            <input className="bg-grey input" type="text" name="title" id="title" placeholder="Titre" required />
            <input className="bg-grey input" type="text" name="description" id="description" placeholder="Description" required />
            <input className="bg-grey input" type="file" name="pictureFile" id="pictureFile" placeholder="Importer une image" required />
            <select className="bg-grey input" name="category" id="category" required>
                <option value="">Category</option>
            </select>
            <input className="bg-grey input small" type="text" name="priceByDay" id="priceByDay" placeholder="Prix / J" required />
            <input className="bg-grey input small" type="number" name="stock" id="stock" required />
            <input className="btn-brown" type="submit" value="Save"/>
        </form>
    )
}

export default FormCreateOffre;