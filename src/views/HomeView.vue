<template>
    <div class="home-view">
        <NavBar />
        <ChatWindow :messages="messages"/>
        <UserInput @send-message="handleSendMessage" />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import UserInput from '@/components/UserInput.vue'
import ChatWindow from '@/components/ChatWindow.vue'

export default {
    name: 'HomeView',
    components: {
        NavBar,
        UserInput,
        ChatWindow
    },
    data() {
        return {
            messages: [] // Stores all messages in order
        };
    },
    methods: {
        handleSendMessage(message) {
            if (!message || typeof message.text !== "string" || message.text.trim() === "") return;

            this.messages.push({ text: message.text, sender: message.sender });

            console.log("Messages:", this.messages);
        }
    }
};
</script>

<style scoped>
* {
    font-family: "Urbanist", sans-serif;
    color: #fff;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.home-view {
    background-color: #13191f !important;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
