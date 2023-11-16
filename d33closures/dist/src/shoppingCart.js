//This closure exercise involves a common real-world scenario.  
export function createShoppingCart() {
    //IMPLEMENT THIS FUNCTION
    let store = [];
    function addItem(item, price) {
        let product = {
            item: item,
            price: price
        };
        store.push(product);
    }
    function removeItem(removeItem) {
        store = store.filter((storeItem) => (storeItem.item !== removeItem));
    }
    function getTotal() {
        return store.reduce((sum, item) => (sum + item.price), 0);
    }
    return {
        addItem: addItem,
        removeItem: removeItem,
        getTotal: getTotal,
    };
}
