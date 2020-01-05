import Axios from "axios";

const ORDERS_URL = "http://localhost:3500/orders";

export default {
    actions: {
        async storeOrder(context, order) {
            order.cartLines = context.rootState.cart.lines;
            return (await Axios.post(ORDERS_URL, order)).data.id;
        }
    }
}

/**
 * The rootState property of the context object is used to navigate to other store module's state
 *
 * The namespace feature is not enabled in this module, which means that it's getters, mutations and actions
 * will not be merged with those in the index.js file and will not be accessed using a prefix.
 * However, the state properties are always prefixed even when the nameapsce feature is not used.
 */
