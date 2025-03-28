
export function getProducts() {
  return fetch("http://127.0.0.1:8000/tool", {

    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur réseau: " + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error("Erreur lors de la récupération des produits :", error);
      throw error;
    });
}

