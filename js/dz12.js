const user = {
    hobby: 'skiing',
    premium: true
}

user.mood = 'happy'
user.hobby = 'drawing'
user.premium = false

console.log(user);

const keys = Object.entries(user)
for (let key of keys) {
    console.log(key);
    
}

// 2

const countProps = function(user) {
    return Object.keys(user).length
}

console.log(countProps(user));

// 3

const employees = {
    'vania': 3,
    'konstantin': 4,
    'mia': 6,
    'klara': 2,
    'roma': 10
}

const findBestEmployee = function(employees) {
    let maxTasks = 0;
    let theBestEmployee = '';
    
    for (const name in employees) {
        if (employees[name] > maxTasks) {
            maxTasks = employees[name];
            theBestEmployee = name;
        }
    }

    return theBestEmployee
}

console.log(findBestEmployee(employees));

// 4

const salary = {
    'marina': 1500,
    'nastya': 1000,
    'ivan': 2700,
    'vladik': 800,
    'sanya': 5900
}

const countTotalSalary = function(salary) {
    const salaeies = Object.values(salary)
    let totalSalary = 0;

    for (const salary of salaeies) {
        totalSalary += salary
    }

    return totalSalary
}

console.log(countTotalSalary(salary));

// 5

const getAllPropValues = function (arr, prop) {
  const result = [];

  for (const obj of arr) {
    if (prop in obj) {
      result.push(obj[prop]);
    }
  }
  return result;
};

const products = [
  { name: "aple", price: 10, quantity: 5 },
  { name: "grape", price: 20, quantity: 15 },
  { name: "mango", price: 67, quantity: 25 },
];