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
    metaInfo() {
    return {
      title: "CoolerBot.ai - AI Chatbot",
      meta: [
        { name: "description", content: "CoolerBot.ai is the smartest AI chatbot! made by coolerputt" },
        { property: "og:title", content: "CoolerBot.ai - AI Chatbot" },
        { property: "og:description", content: "Engage with AI like never before!" },
        { property: "og:image", content: "https://i.ibb.co/DD1S8jN9/Cooler-bot-icon-small.png" },
        { 
  "name": "keywords", 
  "content": "CoolerBot, CoolerBot.ai, AI chatbot, Smart chatbot, AI virtual assistant, AI-powered chatbot, Conversational AI, AI chatbot online, Intelligent chatbot, Best AI chatbot, CoolerBot AI chatbot, CoolerBot.ai smart assistant, AI chatbot for customer support, AI chatbot for websites, AI chatbot for e-commerce, AI chatbot for startups, AI chatbot for social media, AI chatbot with voice, Best AI chatbot for customer service, AI chatbot with machine learning, CoolerBot API, CoolerBot.ai integration, AI chatbot open-source, AI chatbot Vue.js, AI chatbot with Flask backend, AI chatbot with Python, AI chatbot using Gemini API, AI chatbot for PWA, AI chatbot Vuex store, AI chatbot with Vue Router, AI chatbot with voice commands, AI chatbot with emotions, CoolerBot.ai human-like responses, AI chatbot for fun conversations, AI chatbot for mental health, AI chatbot for learning, AI chatbot for entertainment, AI chatbot for dating, AI chatbot for finance, AI chatbot for productivity, CoolerBot.ai chatbot trends, Best AI chatbot apps, AI chatbot for social media automation, AI chatbot for content creation, AI chatbot vs human chat support, How AI chatbots work, AI chatbot benefits, AI chatbot success stories, Future of AI chatbots, CoolerBot.ai future AI chatbot" 
},
        { property: "og:url", content: "https://https://coolerbot.surge.sh/" }
      ]
    }
  },components: {
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
