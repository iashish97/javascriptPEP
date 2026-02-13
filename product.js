export const products = [
    { id: 1, name: "Nuke", price: 500000000 },
    { id: 2, name: "C4", price: 20000 },
    { id: 3, name: "Plasma Torpedo", price: 3000000 }
];

export const showProducts = () => {
    products.forEach(p =>console.log(p.id, p.name, "- ₹" + p.price));
};
