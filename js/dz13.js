
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],
  transactionId: 1,

  createTransaction(amount, type) {
    return {
      id: this.transactionId++,
      amount: amount,
      type: type
    };
  },

  deposit(amount) {
    if (amount <= 0) {
      console.log('Сума повинна бути більше 0');
      return;
    }
    
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    console.log(`Поповнено ${amount}. Новий баланс: ${this.balance}`);
  },

  withdraw(amount) {
    if (amount <= 0) {
      console.log('Сума повинна бути більше 0');
      return;
    }
    
    if (amount > this.balance) {
      console.log(`Недостатньо коштів. Поточний баланс: ${this.balance}`);
      return;
    }
    
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    console.log(`Знято ${amount}. Новий баланс: ${this.balance}`);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    return this.transactions.find(transaction => transaction.id === id);
  },

  getTransactionTotal(type) {
    return this.transactions
      .filter(transaction => transaction.type === type)
      .reduce((total, transaction) => total + transaction.amount, 0);
  }
};