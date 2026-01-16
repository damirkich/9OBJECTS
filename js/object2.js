const user = {
    name: "John",
    age: 25,
    isAdmin: true
}

for (let key in user) {
    // console.log(key);
    console.log(user[key]);
}


const hotel = {
    name: "Alezzi",
    rating: 4.3,
    capacity: 100,
    hasPool: true
}

const keys = Object.keys(hotel);
console.log(keys);

const values = Object.values(hotel);
console.log(values);

const entries = Object.entries(hotel);
console.log(entries);

for (let key of keys) {
    console.log("value:", hotel[key]);

    if(key === hasPool && hotel[key]) {
    console.log("Hotel has a pool");
    }
}