import React, {useState} from 'react';
import '../css/Form.css';

function FormCreateCategory() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault(); // Pour ne pas recharger la page
        const newCategory = {name};
        const baseUrl = process.env.BASE_URL;
        try {
            const response = await fetch(`${baseUrl}category`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newCategory),
            });
            if (!response.ok) {
                throw new Error("Erreur lors de l'ajout de la catégorie");
            }
            const data = await response.json();
            setMessage(`Catègorie "${data.name}" créée avec succès`);
            setName(""); // Réinitialisation de l'input
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="create-offre">
            <input className="bg-grey input" type="text" name="name" id="name" placeholder="Catégorie" value={name} onChange={(e) => setName(e.target.value)} required />
            <input className="btn-brown" type="submit" value="Save"/>
            {message && <p>{message}</p>}
        </form>
    )
}

export default FormCreateCategory;