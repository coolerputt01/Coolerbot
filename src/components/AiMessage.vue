<template>
    <div class="message-container">
        <img 
            v-lazy="'https://i.ibb.co/DD1S8jN9/Cooler-bot-icon-small.png'" 
            alt="AI Avatar" 
            class="ai-message-image"
        >
        <div class="ai-message" :class="{ lightmode: !isDarkMode }">
            <span ref="typedElement"></span>
            <div class="info">
                <p class="dtime" :class="{ lightmode: !isDarkMode }">{{ time }}</p>
                <i class="fa-solid fa-volume-high" :class="{ lightmode: !isDarkMode }" @click="speak(formattedmessage)" :disabled="isCooldownActive"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Typed from "typed.js";
import { mapState } from "vuex";
import { marked } from "marked"; // Correctly import marked

export default {
    name: "AiMessage",
    props: {
        aimessage: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState(["isDarkMode"]),
        // Compute the current time in a readable format
        time() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
        }
    },
    setup(props) {
        const typedElement = ref(null);
        const isCooldownActive = ref(false);
        const cooldownDuration = 3000;  // 3 seconds cooldown
        let typed = null;
        
        // Ensure formattedmessage is updated from the aimessage prop using marked
        let formattedmessage = marked(props.aimessage); // Use props.aimessage in setup
        
        // Start the typing animation
        const startTyping = () => {
            if (typedElement.value && formattedmessage) {
                typed = new Typed(typedElement.value, {
                    strings: [formattedmessage],
                    typeSpeed: 10,
                    showCursor: true,
                    cursorChar: "|",
                    loop: false,
                    onComplete: () => {
                        setTimeout(() => {
                            const cursor = typedElement.value?.parentElement.querySelector(".typed-cursor");
                            if (cursor) cursor.style.display = "none"; // Hide cursor safely
                        }, 500);
                    }
                });
            }
        };

        // Method for text-to-speech with cooldown prevention
        const speak = (text) => {
            if (isCooldownActive.value) return;  // Prevent if cooldown is active

            // Activate cooldown
            isCooldownActive.value = true;

            const speech = new SpeechSynthesisUtterance(text);
            speech.lang = "en-US";
            speech.rate = 1;
            speech.pitch = 1;
            window.speechSynthesis.speak(speech);

            // Set the cooldown flag to false after the cooldown period
            setTimeout(() => {
                isCooldownActive.value = false;
            }, cooldownDuration);
        };

        // Initialize the typing animation when the component is mounted
        onMounted(() => {
            startTyping();
        });

        // Destroy the typed instance when the component is unmounted
        onBeforeUnmount(() => {
            if (typed) {
                typed.destroy();
            }
        });

        // Return values to the template
        return { typedElement, speak, isCooldownActive, formattedmessage };
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
    overflow-x: hidden;
    margin: 0.5em;
    max-width: 80%;
}

/* AI Message */
.ai-message {
    color: #000;
    padding: 10px 15px;
    border-radius: 15px 15px 15px 0px;
    max-width: 90%;
    font-size: 14px;
    line-height: 1.4;
    width: 100%;
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

.dtime {
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

/* Disabled button */
.fa-volume-high:disabled {
    color: #ccc; /* Disabled icon style */
    pointer-events: none; /* Prevent clicking while disabled */
}
</style>
