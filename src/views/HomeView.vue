<template>
    <div class="home-view">
        <NavBar />
        <ChatWindow :messages="messages"/>
        <UserInput @send-message="handleSendMessage" />
    </div>
</template>

<script>
import { ref } from "vue";
import { useHead } from "@vueuse/head";
import NavBar from "@/components/NavBar.vue";
import UserInput from "@/components/UserInput.vue";
import ChatWindow from "@/components/ChatWindow.vue";

export default {
    name: "HomeView",
    components: {
        NavBar,
        UserInput,
        ChatWindow
    },
    setup() {
        useHead({
            title: "CoolerBot.ai - AI Chatbot",
            meta: [
                // General SEO Meta Tags
                { name: "description", content: "CoolerBot.ai is the smartest AI chatbot designed for seamless interactions." },
                { name: "keywords", content: "CoolerBot, CoolerBot.ai, AI chatbot, Smart chatbot, AI assistant, Conversational AI, Intelligent chatbot, AI-powered chatbot, Chatbot technology, Machine learning chatbot, AI virtual assistant" },

                // Open Graph (OG) Meta Tags for Social Media Sharing
                { property: "og:type", content: "website" },
                { property: "og:title", content: "CoolerBot.ai - AI Chatbot" },
                { property: "og:description", content: "Engage with AI like never before! CoolerBot.ai brings human-like responses and intelligent conversations." },
                { property: "og:image", content: "https://i.ibb.co/DD1S8jN9/Cooler-bot-icon-small.png" },
                { property: "og:url", content: "https://coolerbot.surge.sh/" },

                // Twitter Card Meta Tags for better Twitter link previews
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:title", content: "CoolerBot.ai - AI Chatbot" },
                { name: "twitter:description", content: "CoolerBot.ai is the smartest AI chatbot, offering human-like conversations and intelligent responses." },
                { name: "twitter:image", content: "https://i.ibb.co/DD1S8jN9/Cooler-bot-icon-small.png" }
            ]
        });

        const messages = ref([]); // Vue 3 reactive state

        const handleSendMessage = (message) => {
            if (!message || typeof message.text !== "string" || message.text.trim() === "") return;
            messages.value.push({ text: message.text, sender: message.sender });
            console.log("Messages:", messages.value);
        };

        return { messages, handleSendMessage };
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
