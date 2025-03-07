<template>
    <div class="message-container">
        <img 
            src="https://i.ibb.co/DD1S8jN9/Cooler-bot-icon-small.png" 
            alt="AI Avatar" 
            class="ai-message-image"
        >
        <div class="ai-message">{{ aimessage }}</div>
    </div>
</template>

<script>
export default {
    name: "AiMessage",
    props: {
        aimessage: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
/* General Styles */
* {
    font-family: "Urbanist", sans-serif;
    color: #fff !important;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Message Container */
.message-container {
    display: flex;
    align-items: flex-start; /* Align text with image */
    justify-content: flex-start;
    gap: 8px; /* Space between message and image */
    margin: 0.5em;
    max-width: 80%;
}

/* AI Message Bubble */
.ai-message {
    background-color: #E5E5EA;
    color: #000 !important;
    padding: 10px 15px;
    border-radius: 15px 15px 15px 0px; /* Adjusted to match AI-style message bubbles */
    text-align: left;
    max-width: 70%;
    word-wrap: break-word;
    font-size: 14px;
    line-height: 1.4;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
}

/* AI Avatar Image */
.ai-message-image {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0; /* Prevents image from shrinking */
}
</style>
