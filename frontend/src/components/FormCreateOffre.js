import React, {useEffect, useState} from 'react';
import '../css/Form.css';

function FormCreateOffre() {
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priceByDay: "",
        stock: "",
        picture: "",
        category: ""
    });

    const baseUrl = process.env.BASE_URL;
    //Charge les catégories
    useEffect(() => {
        fetch(`${baseUrl}category`)
            .then(res => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.log("Erreur chargement catégories", error));
    }, []);

    //Changement des inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    }

    // Gérer le format d'envoie de l'image
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData((prevState) => ({
                ...prevState,
                picture: reader.result //Stockage de l'image en base64 pour le back
            }));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    //Envoie du form
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${baseUrl}tool`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });
            if (!response.ok) throw new Error("Erreur lors de la création");
            alert("Offre créée avec succès");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="create-offre">
            <input className="bg-grey input" type="text" name="title" id="title" placeholder="Titre" required onChange={handleChange} />
            <input className="bg-grey input" type="text" name="description" id="description" placeholder="Description" required onChange={handleChange} />
            <input className="bg-grey input" type="file" name="pictureFile" id="pictureFile" placeholder="Importer une image" required onChange={handleFileChange}/>
            <select className="bg-grey input" name="category" id="category" required onChange={handleChange}>
                <option value="">Category</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
            <input className="bg-grey input small" type="text" name="priceByDay" id="priceByDay" placeholder="Prix / J" required onChange={handleChange} />
            <input className="bg-grey input small" type="number" name="stock" id="stock" required onChange={handleChange} />
            <input className="btn-brown" type="submit" value="Save"/>
        </form>
    )
}

export default FormCreateOffre;