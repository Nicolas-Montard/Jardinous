import React from 'react';

function FormCreateOffre() {
    return (
        <form action="" method="POST" className="create-offre">
            <input type="text" name="title" id="title" placeholder="Titre" required />
            <input type="text" name="description" id="description" placeholder="Description" required />
            <input type="file" name="pictureFile" id="pictureFile" placeholder="Importer une image" required />
            <select name="category" id="category" required>
                <option value="">Category</option>
            </select>
            <input type="text" name="priceByDay" id="priceByDay" placeholder="Prix / J" required />
            <input type="number" name="stock" id="stock" required />
            <button>
                <input type="submit" value="Save"/>
            </button>
        </form>
    )
}

export default FormCreateOffre;