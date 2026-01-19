const userArray = [
    'john', 'anderi', 'nastya', 'elon'
];
if(userArray.includes("john")) {
    console.log("user exists");
}

for(let i = 0; i < userArray.length; i++) {
    if(userArray[i] === "john") {
        console.log("usr exsts");
    }
}




const dirtyMultiply = (array, value) => {
    for(let i = 0; i < array.length; i++) {
        array[i] *= value;
    }
}

const numbers = [3, 5, 1, 4];
dirtyMultiply(numbers, 2);
console.log(numbers);

const numbers2 = [5, 6, 8, 2, 1];
const pureMultyply = (array, value) => {
    const resultArr = [];

    for (let i = 0; i < array.length; i++) {
        resultArr.push(array[i] * value);
    }
    return resultArr
}

const doubledNumbers = pureMultyply(numbers2, 3);
console.log(doubledNumbers);