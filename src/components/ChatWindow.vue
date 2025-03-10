<template>
    <section class="chat-window" :class="{ darkmode: isDarkMode }" ref="chatWindow">
        <div class="message-container">
            <template v-for="(msg, index) in messages" :key="index">
                <UserMessage v-if="msg.sender === 'user'" :usermessage="msg.text" />
                <AiMessage v-else-if="msg.sender === 'ai'" :aimessage="msg.text" />
            </template>
        </div>
    </section>
</template>

<script>
import UserMessage from './UserMessage.vue';
import AiMessage from './AiMessage.vue';
import { mapState } from "vuex";
export default {
    name: "ChatWindow",
    props: {
        messages: Array // Unified array of all messages
    },
    components: {
        UserMessage,
        AiMessage
    },
    computed: {
    ...mapState(["isDarkMode"])
  },
  methods: {
        scrollToBottom() {
            const chatWindow = this.$refs.chatWindow;
            if (chatWindow) {
                chatWindow.scrollTop = chatWindow.scrollHeight;
            }
        }
    },
    mounted() {
        // Scroll to the bottom when the component is first rendered
        this.$nextTick(() => {
            this.scrollToBottom();
        });
    },
    updated() {
        // Scroll to the bottom whenever the messages change
        this.scrollToBottom();
    }
};
</script>

<style scoped>
/* Customize scrollbar */
.chat-window {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    margin-top: 5em;
    margin-bottom: 5em;
    z-index: 100;
    /* Scrollbar Styling */
    scrollbar-width: thin; /* For Firefox */
    scrollbar-color: #00FF9C #1f2730; /* Scroll thumb and track */
    overflow-x: hidden;
}

/* Webkit-based browsers (Chrome, Edge, Safari) */
.chat-window::-webkit-scrollbar {
    width: 8px; /* Thin scrollbar */
}

.chat-window::-webkit-scrollbar-thumb {
    background-color: #00FF9C; /* Neon green thumb */
    border-radius: 10px; /* Rounded edges */
    transition: background 0.3s;
}
.darkmode {
  background-color: #fff !important;
  color: #000 !important;
}
.chat-window::-webkit-scrollbar-thumb:hover {
    background-color: #00cc7a; /* Slightly darker green on hover */
}

.chat-window::-webkit-scrollbar-track {
    background-color: #1f2730; /* Dark background */
    border-radius: 10px;
}
</style>