<template>
    <div class="user-message"> {{ usermessage }}</div>
</template>

<script>
    export default {
        name: "UserMessage",
        props:{
            usermessage:{
                type:String,
                required:true
            }
        }
    }
</script>

<style scoped>
    * {
    font-family: "Urbanist", sans-serif;
    color: #fff !important;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.user-message {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #00FF9C !important;
    backdrop-filter: blur(10px);
    padding: 2.7em;
    overflow:hidden;
    color: #fff !important;
}
</style>