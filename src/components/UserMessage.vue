<template>
    <div class="message-container">
        <div class="user-message">{{ usermessage }} <p class="dtime">{{ time }}</p></div>
        <img 
            v-lazy="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanlasPgQjfGGU6anray6qKVVH-ZlTqmuTHw&s'" 
            alt="User" 
            class="user-message-image"
        >
    </div>
</template>

<script>
export default {
    name: "UserMessage",
    props: {
        usermessage: {
            type: String,
            required: true
        }
    },setup(){
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let time = `${hours}:${minutes}`;
        return {time};
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
    align-items: flex-end; /* Aligns text with image */
    justify-content: flex-end;
    gap: 8px; /* Space between message and image */
    margin: 0.5em;
    max-width: 80%;
}

/* Message Bubble */
.user-message {
    background-color: #00FF9C;
    color: #000 !important;
    padding: 10px 15px;
    border-radius: 15px 15px 0px 15px; /* Rounded bubble with a tail effect */
    text-align: left;
    max-width: 70%;
    word-wrap: break-word;
    font-size: 14px;
    line-height: 1.4;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
}

/* User Image */
.user-message-image {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0; /* Prevents image from shrinking */
}
.dtime{
    font-size: 10px;
    color: darkgrey;
}
</style>
