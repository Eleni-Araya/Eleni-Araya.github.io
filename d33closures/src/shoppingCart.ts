//This closure exercise involves a common real-world scenario.  

// This exercise uses closures to create a shopping cart. It encapsulates the cart array, allowing you to
//  add items, remove items, and calculate the total cost. The items and their prices are private and can only be 
//  accessed or modified through the provided methods, demonstrating the concept of closures in a different context.
// Exercise: Closure and a Shopping Cart

// Create a function that simulates a shopping cart. The cart should allow you to add items,
// remove items, and calculate the total cost. Items and their prices should be private
// and not directly accessible.

type Item = {
    item: string;
    price: number;
}

type Cart = {
    addItem: (item: string, price: number) => void;
    removeItem: (item: string) => void;
    getTotal: () => number;
}

export function createShoppingCart(): Cart {
    //IMPLEMENT THIS FUNCTION
    let store: Item[] = [];
    function addItem(item: string, price: number): void {
        let product: Item = {
            item: item,
            price: price
        }
        store.push(product)
    }

    function removeItem(removeItem: string): void {
        store = store.filter((storeItem: Item) => (storeItem.item !== removeItem))
    }
    function getTotal(): number {
        return store.reduce((sum, item) => (sum + item.price), 0)
    }
    return {
        addItem: addItem,
        removeItem: removeItem,
        getTotal: getTotal,
    }
}
