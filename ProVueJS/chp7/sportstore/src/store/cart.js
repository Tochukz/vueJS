export default {
    namespaced: true,
    state: {
        lines: []
    },
    getters: {
        itemCount: state => state.lines.reduce((total, line) => 
                                    total + line.quantity, 0),
        totalPrice: state => state.lines.reduce((total, line) => 
                                    total + (line.quantity * line.product.price), 0)
    },
    mutations: {
        addProduct(state, product) {
            let line = state.lines.find(line => line.product.id == product.id);
            if (line != null) {
                line.quantity++;
            } else {
                state.lines.push({product: product, quantity: 1});
            }
        },
        changeQuantity(state, update) {
            update.line.quantity =  update.quantity;
        },
        removeProduct(state, lineToRemove) {
            let index = state.lines.findIndex(line => line == lineToRemove);
            if ( index > -1) {
               state.lines.splice(index, 1);
            }
        },
        setCartData(state, data) {
            state.lines = data;
        }
    },
    actions: {
        loadCartData(context) {
            let data = localStorage.getItem("cart");
            if (data != null) {
                context.commit("setCartData", JSON.parse(data));
            }
        },
        storeCartData(context) {
            localStorage.setItem("cart", JSON.stringify(context.state.lines));
        },
        clearCartData(context) {
            context.commit("setCartData", []);
        },
        initializeCart(context, store) {
            context.dispatch("loadCartData");
            store.watch(state => state.cart.lines, () => context.dispatch("storeCartData"), {deep: true});
        }
    }
}

/**
 * The namespaced property set to true keeps the features in this data store seperate, so that it will be accessed with a prefix.
 * Without this setting, the features defined in the cart.js file would be merged into the main data store which can be confusing 
 * unless you ensure that the names used for properties and functions cannot be confused.
 */

 /**
  * Actions are not allowed to modify state data directly in the data store, a mutation should be used directed or indirectly.
  */