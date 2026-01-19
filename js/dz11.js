const bankAccount = {
    ownerName: "Іван Петренко",
    accountNumber: "UA123456789012345678901234567",
    balance: 1000,
    
    deposit() {
        const wantToDeposit = confirm("Бажаєте поповнити рахунок?");
        if (wantToDeposit) {
            const amountStr = prompt("Введіть суму для поповнення:");
            const amount = parseFloat(amountStr);
            
            if (!isNaN(amount) && amount > 0) {
                this.balance += amount;
                alert(`Рахунок поповнено на ${amount} грн.\nНовий баланс: ${this.balance.toFixed(2)} грн.`);
            } else {
                alert("Невірна сума! Введіть додатнє число.");
            }
        } else {
            alert("Операцію скасовано.");
        }
    },
    
    withdraw() {
        const wantToWithdraw = confirm("Бажаєте зняти готівку?");
        if (wantToWithdraw) {
            const amountStr = prompt("Введіть суму для зняття:");
            const amount = parseFloat(amountStr);
            
            if (!isNaN(amount) && amount > 0) {
                if (amount <= this.balance) {
                    this.balance -= amount;
                    alert(`Знято ${amount} грн.\nНовий баланс: ${this.balance.toFixed(2)} грн.`);
                } else {
                    alert("Недостатньо коштів на рахунку!");
                }
            } else {
                alert("Невірна сума! Введіть додатнє число.");
            }
        } else {
            alert("Операцію скасовано.");
        }
    }
};

console.log("=== Тестування bankAccount ===");
console.log("Власник:", bankAccount.ownerName);
console.log("Номер рахунку:", bankAccount.accountNumber);
console.log("Поточний баланс:", bankAccount.balance);

const weather = {
    temperature: null,
    humidity: 65,
    windSpeed: 10,
    
    checkTemperature() {
        const tempInput = prompt("Введіть температуру у градусах Цельсія:");
        this.temperature = parseFloat(tempInput);
        
        if (isNaN(this.temperature)) {
            alert("Будь ласка, введіть коректне число!");
            return null;
        }
        
        if (this.temperature < 0) {
            console.log("Температура нижче 0 градусів Цельсія");
            return true;
        } else {
            console.log("Температура вище або рівна 0 градусів Цельсія");
            return false;
        }
    }
};

console.log("=== Тестування weather ===");

const user = {
    name: "Олександр Коваленко",
    email: "user@example.com",
    password: "SecurePass123",
    
    login() {
        const inputEmail = prompt("Введіть ваш email:");
        const inputPassword = prompt("Введіть ваш пароль:");
        
        if (inputEmail === this.email && inputPassword === this.password) {
            alert(`Вітаємо, ${this.name}! Ви успішно увійшли в систему.`);
            return true;
        } else {
            alert("Помилка: невірний email або пароль!");
            return false;
        }
    }
};

console.log("=== Тестування user ===");
console.log("Ім'я:", user.name);
console.log("Email:", user.email);

const movie = {
    title: "Інтерстеллар",
    director: "Крістофер Нолан",
    year: 2014,
    rating: 8.6,
    
    checkRating() {
        if (this.rating > 8) {
            console.log(`Рейтинг фільму "${this.title}" вище 8`);
            return true;
        } else {
            console.log(`Рейтинг фільму "${this.title}" 8 або нижче`);
            return false;
        }
    },
    
    displayInfo() {
        console.log("=== Інформація про фільм ===");
        console.log(`Назва: ${this.title}`);
        console.log(`Режисер: ${this.director}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Рейтинг: ${this.rating}`);
    }
};

movie.displayInfo();
console.log("еревірка рейтингу:");
const isHighRating = movie.checkRating();
console.log(`Результат перевірки: ${isHighRating}`);

const movie2 = {
    title: "Тестовий фільм",
    director: "Тест Режисер",
    year: 2023,
    rating: 6.5,
    
    checkRating() {
        return this.rating > 8;
    }
};

console.log("=== Тестування movie2 ===");
console.log(`Рейтинг фільму "${movie2.title}": ${movie2.rating}`);
console.log(`Рейтинг вище 8: ${movie2.checkRating()}`);
