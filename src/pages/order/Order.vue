<template>
    <div class="order-container">
        <h1>{{title}}</h1>
        <OrderAdd :title="title" @getAddData="getAddData"></OrderAdd>
        <OrderList></OrderList>
    </div>
</template>
<script>
    import OrderAdd from "./OrderAdd";
    import OrderList from "./OrderList";

    export default {
        name: "order-page",
        components: {
            OrderAdd,
            OrderList
        },
        data() {
            return {
                title: 'order-page',
                list: []
            }
        },
        methods: {
            getAddData(data){
                console.log('add data:',data);
            }
        },
        computed: {},
        mounted() {
            console.log(this.$bus);
            this.$bus.$emit("getData","hello world");
            console.log(this.$store.state);
        }
    }
</script>

<style lang="scss" scoped>
    $color: red;
    .order-container {
        height: 100%;

        h1 {
            color: $color;
        }
    }
</style>

