<template>
    <div class="home-view">
        <NavBar />
        <ChatWindow :messages="messages" />
        <UserInput @send-message="handleSendMessage" />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import UserInput from '@/components/UserInput.vue'
import ChatWindow from '@/components/ChatWindow.vue' // New component for chat messages

export default {
    name: 'HomeView',
    components: {
        NavBar,
        UserInput,
        ChatWindow
    },
    data() {
        return {
            messages: [] // Array to store chat messages
        };
    },
    methods: {
        handleSendMessage(userMessage) {
            if (userMessage.trim() !== "") {
                this.messages.push({ text: userMessage, sender: "user" }); // Append user message
            }
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
