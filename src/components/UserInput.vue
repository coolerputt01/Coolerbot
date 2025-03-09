<template>
    <div class="user-input">
        <div class="just-a-container">
            <input
                type="text"
                v-model="prompt"
                placeholder="Enter a prompt here..."
                class="prompt"
                @keyup.enter="sendMessage"
            />
        </div>
        <i class="fa-solid fa-paper-plane" @click="sendMessage"></i>
    </div>
</template>

<script>
import { GoogleGenerativeAI } from "@google/generative-ai";

export default {
    name: "UserInput",
    data() {
        return {
            prompt: "", // Stores user input
            apikey: "AIzaSyDNYaWdctjN18oY_ePuDRFSQqjPLT3HI1Q",
        };
    },
    methods: {
        async sendMessage() {
            if (this.prompt.trim() === "") return;

            this.$emit("send-message", {text:this.prompt,sender:'user'}); // Emit message to parent
            const userInput = this.prompt; // Store the input before clearing
            this.prompt = ""; // Clear input field after sending
            this.$emit("send-message", {text:"Thinking...",sender:'ai'});
            try{
            const genAI = new GoogleGenerativeAI(this.apikey);
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
            const response = await model.generateContent(userInput);
            console.log(response.response.text());
            this.$emit("send-message", {text:response.response.text(),sender:'ai'});
             }catch(err){
                this.$emit("send-message", {text:"Something went wrong!",sender:'ai'}); 
                console.error(err);
             }
        },
    },
};
</script>

<style scoped>
* {
    font-family: "Urbanist", sans-serif;
    color: #fff !important;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.user-input {
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1f2730 !important;
    backdrop-filter: blur(10px);
    height: 3em;
    padding: 2.7em;
    width: 100vw;
    overflow: hidden;
    z-index: 100;
}
.prompt {
    padding: 1.2em;
    border: 1px solid #fff;
    border-radius: 15px;
    background-color: transparent;
    width: 76vw;
    transition: all 750ms;
}
.prompt:focus {
    outline: none;
    border: none;
    background-color: #586d85;
    color: #fff;
}
.prompt:focus::placeholder {
    color: lightgray !important;
}
.just-a-container {
    position: relative;
}
.just-a-container > i {
    position: absolute;
    right: 5%;
}
i {
    font-family: "Font Awesome 6 Free", Arial, sans-serif;
    padding: 1em;
    color: transparent !important;
    -webkit-text-stroke: 1px #fff !important;
}
.fa-paper-plane {
    padding: 1.2em;
    background-color: #586d85;
    border-radius: 14px;
    margin: 0.5em;
    -webkit-text-stroke: 2px #fff !important;
    cursor: pointer; /* Makes it clickable */
}
</style>
