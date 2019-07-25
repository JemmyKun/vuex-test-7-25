<template>
    <div>
        <h2>{{name}}</h2>
        <ul>
            <li v-for="(item,index) in orderList" :key="index">
                <span class="name">{{item.name}}</span>
                <span class="time">{{formatTime(item.updateTime)}}</span>
                <span class="delete" @click="DELETE_ORDER(item.id)">删除</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import Apis from "../../api/order";
    import {mapActions} from "vuex";
    import {format} from "date-fns";

    export default {
        name: "order-list",
        props: {},
        data() {
            return {
                name: "order-list",
            }
        },
        methods: {
            formatTime(time) {
                return time ? format(time, "YYYY-MM-DD HH:mm:ss") : "--";
            },
            ...mapActions(["DELETE_ORDER"]),
            async deleteOrder(id) {
                try {
                    let res = await Apis.deleteOrder({id});
                    if (res.data.status === "200") {
                        await this.$store.dispatch("GET_LIST");
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        },
        computed: {
            orderList() {
                return this.$store.state.order.data;
            }
        },
        mounted() {
            this.$store.dispatch("GET_LIST");
            this.$bus.$off("getData").$on("getData", (data) => {
                console.log('data:', data);
            })
        }
    }
</script>
<style lang="scss" scoped>
    * {
        list-style: none;
    }

    .name, .time, .delete {
        display: inline-block;;
        margin-right: 20px;
    }
</style>