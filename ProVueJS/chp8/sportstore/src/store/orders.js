import Axios from "axios";
import Vue from "vue";

const ORDERS_URL = "/api/orders"; //"http://localhost:3500/orders";

export default {    
    state: {
        orders: []
    },
    mutations: {
        setOrders(state, data) {
            state.orders = data
        },
        changeOrderShipped(state, order) {
            Vue.set(order, "shipped", order.shipped == null || !order.shipped ? true : false);
        }
    },
    actions: {
        async storeOrder(context, order) {
            order.cartLines = context.rootState.cart.lines;
            return (await Axios.post(ORDERS_URL, order)).data.id;
        },
        async getOrders(context) {
            context.commit("setOrders", (await context.rootGetters.authenticatedAxios.get(ORDERS_URL)).data);
        },
        async updateOrder(context, order) {
            context.commit("changeOrderShipped", order);
            await context.rootGetters.authenticatedAxios.put(`${ORDERS_URL}/${order.id}`, order);
        }
    }
}

/**
 * The rootState property of the context object is used to navigate to other store module's state 
 * 
 * The namespace feature is not enabled in this module, which means that it's getters, mutations and actions 
 * will not be merged with those iin the index.js file and will not be accessed using a prefix.
 * However, the state properties are always prefixed event when the nameapsce feature is not used.
 */