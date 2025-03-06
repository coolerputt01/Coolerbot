<!--Entirely madev with gpt but I tweaked-->
<template>
    <div class="chat-window">
        <div v-for="(msg, index) in messages" :key="index" class="message" :class="msg.sender">
            {{ msg.text }}
        </div>
    </div>
</template>

<script>
export default {
    name: "ChatWindow",
    props: {
        messages: Array
    }
};
</script>

<style scoped>
.chat-window {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    margin-top:5em;
}
.message {
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
    max-width: 70%;
}
.user {
    align-self: flex-end;
    background-color: #00FF9C;
    color: black;
}
</style>
