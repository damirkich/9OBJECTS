//? Об'єкт — асоціативний масив, тип даних, який зберігає властивості (properties) і методи (methods).
const product = {
    name: "aple",
    price: 2,
    quantiti: 4,
    isFresh: true,
    country: "USA"
}

console.log(product.name);


product.quantiti = 2;
product.price = 1;

product.discountPercentage = "30%";
console.log(product);

if(product.discountPercentage) {
    console.log("yes");
} else {
    console.log("no");
}

delete product.discountPercentage;
console.log(product);