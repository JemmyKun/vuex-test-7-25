import Action from "./actions/order";
import Apis from "../api/order";

const order = {
    [Action.GET_LIST]: ({commit}) => {
        try {
            Apis.getList().then(res => {
                if (res.data.status === "200") {
                    let data = res.data.content || [];
                    commit("GET_ORDER_LIST", {data})
                }
            })
        } catch (err) {
            console.log(err);
        }
    },
    [Action.ADD_ORDER]: ({dispatch},param) => {
        try {
            Apis.addOrder(param).then(res => {
                if (res.data.status === "200") {
                    dispatch(Action.GET_LIST)
                }
            })
        } catch (err) {
            console.log(err);
        }
    },
    [Action.DELETE_ORDER]: ({dispatch},id) => {
        try {
            console.log('id====>',id);
            Apis.deleteOrder({id}).then(res => {
                if (res.data.status === "200") {
                    dispatch(Action.GET_LIST)
                }
            })
        } catch (err) {
            console.log(err);
        }
    }
};
const about = {
    ["handleAboutClick"]: (state) => {
        console.log(state);
    }
};

export default {
    ...order, ...about
}