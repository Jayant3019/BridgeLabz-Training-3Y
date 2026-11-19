// Q7. Banking Application (Private Class Field)

class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        if (!Number.isFinite(initialBalance) || initialBalance < 0) {
            throw new Error("Initial balance must be a non-negative number.");
        }

        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }

        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance. Withdrawal declined.");
        }

        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(5000);

try {
    console.log("Initial balance: Rs.", account.getBalance());
    account.deposit(2000);
    console.log("After deposit: Rs.", account.getBalance());

    account.withdraw(1000);
    console.log("After valid withdrawal: Rs.", account.getBalance());

    account.withdraw(10000); // Intentionally invalid: insufficient balance.
} catch (error) {
    console.log("Transaction failed:", error.message);
}

console.log("Final balance: Rs.", account.getBalance());

// #balance is private and cannot be accessed directly outside the class.
