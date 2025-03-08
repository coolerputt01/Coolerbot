<template>
    <div class="message-container">
        <img 
            src="https://i.ibb.co/DD1S8jN9/Cooler-bot-icon-small.png" 
            alt="AI Avatar" 
            class="ai-message-image"
        >
        <div class="ai-message">
            <span ref="typedElement"></span>
        </div>
    </div>
</template>

<script>
import Typed from "typed.js";

export default {
    name: "AiMessage",
    props: {
        aimessage: {
            type: String,
            required: true
        }
    },
    mounted() {
        this.startTyping();
    },
    methods: {
        startTyping() {
            this.typed = new Typed(this.$refs.typedElement, {
                strings: [this.aimessage],
                typeSpeed: 10,
                showCursor: true,
                cursorChar: "|",
                loop: false,
                onComplete: () => {
                    setTimeout(() => {
                        if (this.$refs.typedElement) {
                            const cursor = this.$refs.typedElement.parentElement.querySelector(".typed-cursor");
                            if (cursor) cursor.style.display = "none"; // Hide cursor safely
                        }
                    }, 500); // Give it a small delay
                }
            });
        }
    },
    beforeUnmount() {
        if (this.typed) {
            this.typed.destroy();
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
    align-items: flex-start;
    gap: 8px;
    margin: 0.5em;
    max-width: 80%;
}

/* AI Message */
.ai-message {
    color: #fff !important;
    padding: 10px 15px;
    border-radius: 15px 15px 15px 0px;
    max-width: 90%;
    word-wrap: break-word;
    font-size: 14px;
    line-height: 1.4;
}

/* AI Avatar Image */
.ai-message-image {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
}
</style>
