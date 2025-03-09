<template>
    <div class="message-container" >
        <img 
            v-lazy="'https://i.ibb.co/DD1S8jN9/Cooler-bot-icon-small.png'" 
            alt="AI Avatar" 
            class="ai-message-image"
        >
        <div class="ai-message" :class="{ lightmode: !isDarkMode }">
            <span ref="typedElement"></span>
            <div class="info">
                <p class="dtime" :class="{ lightmode: !isDarkMode }">{{ time }}</p>
                <i class="fa-solid fa-volume-high" :class="{ lightmode: !isDarkMode }" @click="speak(aimessage)"></i>
            </div>
        </div>
    </div>
</template>

<script>
import Typed from "typed.js";
import { mapState } from "vuex";
export default {
    name: "AiMessage",
    props: {
        aimessage: {
            type: String,
            required: true
        }
    },
    computed: {
    ...mapState(["isDarkMode"])
  },
    mounted() {
        this.startTyping();
    },
    methods: {
        speak(text) {
            const speech = new SpeechSynthesisUtterance(text);
            speech.lang = "en-US"; // Set language
            speech.rate = 1; // Speed (1 is normal)
            speech.pitch = 1; // Pitch (1 is normal)
            window.speechSynthesis.speak(speech);
        },
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
    },setup(){
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let time = `${hours}:${minutes}`;
        return {time};
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
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Message Container */
.message-container {
    z-index: 100;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin: 0.5em;
    max-width: 80%;
}

/* AI Message */
.ai-message {
    color: #000 ;
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
.lightmode {
  color: #fff !important;
}
.dtime{
    font-size: 10px;
    color: #000;
}
.info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 3.1em;
}
.fa-volume-high {
    font-family: "Font Awesome 6 Free", Arial, sans-serif;
    font-size: 0.9em;
    color: #000;
}
</style>
