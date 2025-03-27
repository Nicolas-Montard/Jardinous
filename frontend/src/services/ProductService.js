
export function getProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            title: "Tondeuse à gazon",
            priceByDay: 5,
            description: "Une tondeuse performante pour l’entretien du jardin",
            stock: 20,
            picture: "imageEncodéeOuURL.png",
          },
          {
            title: "Motobineuse",
            priceByDay: 7,
            description: "Idéal pour retourner la terre et préparer vos plantations",
            stock: 10,
            picture: "imageEncodéeOuURL.png",
          },
        ]);
      }, 500);
    });
    
  }
  