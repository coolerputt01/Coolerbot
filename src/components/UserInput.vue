<template>
    <div class="user-input">
        <div class="just-a-container">
            <input type="text" v-model="prompt" placeholder="Enter a prompt here..." class="prompt" @keyup.enter="sendMessage"/>
            <i class="fa-solid fa-microphone"></i>
        </div>
        <i class="fa-solid fa-paper-plane" @click="sendMessage"></i>
    </div>
</template>

<script>
export default {
    name: 'UserInput',
    data() {
        return {
            prompt: "" // Stores user input
        };
    },
    methods: {
        sendMessage() {
            if (this.prompt.trim() !== "") {
                this.$emit("send-message", this.prompt); // Emit message to parent
                this.prompt = ""; // Clear input field after sending
            }
        }
    }
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
    -webkit-text-stroke: 2px #1f2730 !important;
    cursor: pointer; /* Makes it clickable */
}
</style>
