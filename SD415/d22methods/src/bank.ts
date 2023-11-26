
/*
21.	Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
b.	credit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
d.  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g., 
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.
Add any necessary types to the above bank object.
*/

type CustomerRecord = {  //interface for the transaction object
    customerId: number;
    customerTransactions: number[];
}

type Bank = {    //interface for the bank object 
    transactionsDB: CustomerRecord[];
    saveTransaction: (customerId: number, amount: number) => void;
    debit: (customerId: number, amount: number) => void;
    credit: (customerId: number, amount: number) => void;
    getBalance: (customerId: number) => number;
    getCustomerById: (customerId: number) => CustomerRecord;
    bankBalance: () => number;
}


export const bank = {
    transactionsDB: [],
    saveTransaction: function (customerId: number, amount: number) {
        console.log(customerId, amount)
    },
    
    debit: function (customerId: number, amount: number) {
        let customer = this.getCustomerById(customerId);
        if (this.getBalance(customerId) >= amount) {
            customer.customerTransactions.push(-amount)
        }
    },
    credit: function (customerId: number, amount: number) {
        let customer = this.getCustomerById(customerId);
        customer.customerTransactions.push(amount)
    },
    getCustomerById: function (customerId: number) {
        // first get the customer from the transactionsDB by using the customererId
        for (let c of this.transactionsDB) {
            if (c.customerId === customerId) {
                return c
            }
        }
        return null
    },
    getBalance: function (customerId: number) {
        let customer = this.getCustomerById(customerId);
        let sum = 0
        for (let transaction of customer.customerTransactions) {
            sum += transaction
        }
        // iterate over the customerTransactions of that customer
        // add them up
        // return the sum
        return sum;
    },
    bankBalance: function () {
        let sum = 0;
        for (const customer of this.transactionsDB) {
            for (const transaction of customer.customerTransactions) {
                sum += transaction
            }
        }
        return sum;
    }
} as Bank;  //define bank object as type Bank

bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];


/* this is complete, no need to modify.
Saves this amount to the customerTransactions array for customerId id. */
bank.saveTransaction = function (customerId: number, amount: number) {
    const customer = bank.transactionsDB.find(customer => customer.customerId === customerId);
    if (customer) {
        customer.customerTransactions.push(amount);
    }
};



