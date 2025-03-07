<template>
    <div class="chat-window">
        <div class="user-message-container">
            <UserMessage
                v-for="(msg, index) in messages"
                v-if="msg.sender === 'user'"
                :key="'user-' + index"
                class="message user"
                :usermessage="msg.text"
            />
            <AiMessage
                v-for="(msg, index) in messages"
                v-if="msg.sender === 'ai'"
                :key="'ai-' + index"
                class="message ai"
                :usermessage="msg.text"
            />
        </div>
    </div>
</template>

<script>
import UserMessage from './UserMessage.vue';
import AiMessage from './AiMessage.vue';

export default {
    name: "ChatWindow",
    props: {
        messages: Array
    },
    components: {
        UserMessage,
        AiMessage,
    }
};
</script>

<style scoped>
.chat-window {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    margin-top: 5em;
    margin-bottom: 5em;
}
</style>
