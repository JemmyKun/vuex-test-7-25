<template>
    <div>
        <h1>{{title}}</h1>
        <label>
            <input type="text" placeholder="add..." :value="name" @input="CHANGE_NAME"/>
            <button @click="ADD_ORDER({name:name})">add</button>
            <button @click="getDataToUp">to up</button>
        </label>
    </div>
</template>

<script>
    import Apis from "../../api/order";
    import {mapMutations, mapActions} from "vuex";

    export default {
        name: "order-add",
        props: {
            title: String
        },
        data() {
            return {
                titleName: "add-page"
            }
        },
        computed: {
            name() {
                return this.$store.state.order.name;
            }
        },
        methods: {
            ...mapActions(["ADD_ORDER"]),
            ...mapMutations(["CHANGE_NAME"]),
            async handleAdd() {
                try {
                    let param = {
                        name: this.name
                    };
                    let res = await Apis.addOrder(param);
                    if (res.data.status === "200") {
                        await this.$store.dispatch("GET_LIST");
                        this.name = "";
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            getDataToUp() {
                this.$emit("getAddData", this.titleName);
            }
        }
    }
</script>