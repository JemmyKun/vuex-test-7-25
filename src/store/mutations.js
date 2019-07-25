import Action from "./actions/order";

const order = {
    ["GET_ORDER_LIST"]: (state, payload) => {
        state.order.data = payload.data;
        state.order.name = "";
    },
    ["CHANGE_NAME"]: (state, payload) => {
        console.log('payload====>>>', payload);
        state.order.name = payload.target.value;
    }
};
const about = {
    [Action.ADD_ORDER]: (state, param) => {
        console.log(state, param);
    }
};

export default {
    ...order, ...about
}