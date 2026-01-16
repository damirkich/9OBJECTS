const car = {
    brand: "bugatata",
    year: "2024",
    color: "black",

    getCarInfo() {
        console.log(`Name: ${this.brand}, Year: ${this.year}, Brand: ${this.color}`);
    }
}

car.getCarInfo()


const restaurant = {
    name: "Puzata Hata",
    cuisine: "ukranian",
    address: "kontraktova plosha",
    rating: 4.7,

    changeResInfo(newAddress, newRating) {
         this.address = newAddress, this.rating = newRating;
    }
}
restaurant.changeResInfo(newAddress = "jonkler 6967 street", newRating = "5");
console.log(restaurant);



const product = {
    name: "aple",
    price: 2,
    quantity: 5,
    total: 0,

    calculatePrice() {
        this.total = this.price * this.quantity;
    }
}
product.calculatePrice();
console.log(product);




const cart = {
    items: [
{ name: '🍎', price: 50, quantity: 17},
{ name: '🍇', price: 70, quantity: 56},
{ name: '🍋', price: 60, quantity: 0},
{ name: '🍓', price: 110, quantity: 78}],
    getItems() {
        return this.items;
    },
    add(product) {
        this.items.push(product);
    },
    remove(productName) {
        const newItems = [];
        for (i = 0; i < this.items.length; i++) {
            if(this.items[i].name !== productName) {
                newItems.push(this.items[i]);
            }
        }
        this.items = newItems;
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i].price;
        }
        return total
    },
    increaseQuantity(productName) {
        for(let i = 0; i < this.items.length; i++) {
            if(this.items[i].name === productName) {
                this.items[i].quantity += 1;
            }
        }
    },
    decreaseQuantity(productName) {
        for(let i = 0; i < this.items.length; i++) {
            if(this.items[i].quantity === 1 || this.items[i] === 0) {
                this.items.splice(i, 1);
                break;
            }
            if(this.items[i].name === productName) {
                this.items[i].quantity -= 1;
            }
        }
    },
  };

// cart.add({
//     name: "cheri",
//     price: 22
// })

// cart.remove("🍋");
// cart.countTotalPrice();
cart.decreaseQuantity("🍋");
console.log(cart);


//////////////////////




const person = {
    name: 'Nelli',
    surname: 'Laroy',
    age: 25
  };
  const person2 = {
    name: 'damir',
    surname: 'chaban',
    age: 14
  };
 const personInfo = function ({name, surname, age}) {
    // const {name, surname, age} = person;
    return `mene zvati ${name} ${surname} and im ${age}`;
 }


 console.log(personInfo(person2));

 ///////

 const student = {
    name: 'Bruce',
    surname: 'Lee',
    grades: [4, 5, 3]
  };

  const calculateAverageGrade = function({name, surname, grades}) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    let average = sum / grades.length;
    return `Average grade of ${name} ${surname} is ${average}`
  }
 
  console.log(calculateAverageGrade(student));


  //////////////////////////


const items = [
    { name: 'Футболка', price: 250, quantity: 2 },
    { name: 'Джинси', price: 800, quantity: 1 },
    { name: 'Кросівки', price: 1200, quantity: 1 }
  ];
  const calculateTotalCost = function(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price * items[i].quantity;
    }
    return `Total cost: ${total}`
  }
 
  console.log(calculateTotalCost(items));




  ///////////////////


const user = {
    name: 'John',
    emails: ['john@gmail.com', 'john@example.com', 'john123@yahoo.com']
  };
  const getFirstEmail = function(user) {

  }
 
  console.log(getFirstEmail(user));

////////////

  const data = {
    users: [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 17 },
      { name: 'Bob', age: 30 },
      { name: 'Alice', age: 20 }
    ]
  };
 const getAdultUsers = function({users}) {
    const adultUserArray= [];
    for (let i = 0; i < users.length; i++) {
        if(users[i].age >= 18) {
            adultUserArray.push(users[i])
        }
    }
    return adultUserArray;
 }
  console.log(getAdultUsers(data)); 



  ////////////////



  const musicLibrary = {
    count: 2,
    artists: [
      {
        name: 'The Beatles',
        albums: [
          {
            title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
            year: 1967,
            tracks: [
              { title: 'With a Little Help from My Friends', duration: '2:44' },
              { title: 'Lucy in the Sky with Diamonds', duration: '3:28' },
              { title: 'A Day in the Life', duration: '5:33' }
            ]
          },
          {
            title: 'Abbey Road',
            year: 1969,
            tracks: [
              { title: 'Come Together', duration: '4:19' },
              { title: 'Something', duration: '3:01' },
              { title: 'Here Comes the Sun', duration: '3:06' }
            ]
          }
        ]
      },
      {
        name: 'Pink Floyd',
        albums: [
          {
            title: 'The Wall',
            year: 1979,
            tracks: [
              { title: 'Another Brick in the Wall, Part 2', duration: '3:59' },
              { title: 'Comfortably Numb', duration: '6:23' },
              { title: 'Hey You', duration: '4:40' }
            ]
          },
          {
            title: 'Dark Side of the Moon',
            year: 1973,
            tracks: [
              { title: 'Speak to Me/Breathe', duration: '3:58' },
              { title: 'Time', duration: '7:06' },
              { title: 'Money', duration: '6:22' }
            ]
          }
        ]
      }        
    ]
}

const { artists:
    [
        { name,
            albums: [
                { title: firstAlbumTitle, year: firstAlbumYear, tracks: [
                    { title: firstTrackTitle, duration: firstTrackDuration }
                ] }, { title: secondAlbumTitle, year: secondAlbumYear, tracks: [{
                    title: secondTrackTitle, duration: secondTrackDuration
                }] }
            ] }
    ]
} = musicLibrary;

console.log(firstAlbumTitle, secondTrackTitle, firstTrackDuration);