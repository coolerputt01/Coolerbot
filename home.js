//This code was written by Coolerputt with the help of ChatGPT😏😏 Enjoy!!!

//User input.
const userInput = document.querySelector('.input');
//Send Button.
const userInputSendBtn = document.querySelector('.send-user-input');
//Chat container.
const chatContainer = document.querySelector('.chat-container');
//User input value though not initialised yet.
let userInputValue;

//Dictionary for custom responses
const customResponses = {
  "who created you?": "Coolerputt",
  "what model are you based off?": "Coolerbot",
  "okay":"no wam",
  "afar":"Bossman",
  "you too sabi":"Na GOD do am🙏🙏"
};

//Function to get the current time.
function getTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  // Format to ensure two digits (e.g., 09:05).
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  return `${hours}:${minutes}`;
}

//Function to scroll the chat container to the bottom.
function scrollToBottom() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

//Function to handle AI and custom responses
function update() {
  //Get the user input all in lowercase.
  const userInputLowerCase = userInputValue.toLowerCase();
  //Check for a custom response.
  const customResponse = customResponses[userInputLowerCase];
//Hide send button on update.
userInputSendBtn.classList.add('send-btn-hide');
//Handling a custom response.
  if (customResponse) {
    //If a custom response exists, display it immediately.
    const aiResponse = `
      <div class="ai-chat-box">
        <div class="${uniqueId}">${customResponse}</div>
        <p class="time">${getTime()}</p>
      </div>`;
     //Add to response screen.
    chatContainer.insertAdjacentHTML("beforeend", aiResponse);
    //Make the send button visible again.
    userInputSendBtn.classList.remove('send-btn-hide');
    //Scroll to bottom too.
    scrollToBottom();
  } else {
    //Add a loading indicator.
    const loadingId = `loading-${Date.now()}`;
    let loadingMessage = `<div class="ai-chat-box" id="${loadingId}">
        <div class="loader">
        <div class="loading-circle1"></div> 
        <div class = "loading-circle2" > </div> 
        <div class = "loading-circle3" > </div>
         </div>
        <p class="time">${getTime()}</p>
      </div>`;
    chatContainer.insertAdjacentHTML("beforeend", loadingMessage);
    scrollToBottom();

    //Fetch AI response
    fetch("https://api.aimlapi.com/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer 90a6426d3b2646d2ac2cc1785b78a0ef",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          {
            role: "user",
            content: userInputValue,
          },
        ],
        max_tokens: 512,
        stream: false,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data); //Check the API response in the console

        //Replace loading message with the actual response
        const uniqueId = `ai-response-text-${Date.now()}`;
        const aiResponseContent = data.choices[0]?.message?.content || "No response";
        const aiResponse = `
          <div class="ai-chat-box">
            <div id="${uniqueId}"></div>
            <p class="time">${getTime()}</p>
          </div>`;
        document.getElementById(loadingId).outerHTML = aiResponse; // Replace the loading div.

        //Use Typed.js for typing effect.
        new Typed(`#${uniqueId}`, {
          strings: [aiResponseContent],
          typeSpeed: 50,
          loop: false,
          showCursor: false
        });

        scrollToBottom();
      })
      .catch((error) => {
        console.error("Error fetching API response:", error.message);

        //Replace loading message with an error message.
        const errorResponse = `
          <div class="ai-chat-box">
            <div class="response-text">Failed to get a response. Please try again later.</div>
            <p class="time">${getTime()}</p>
          </div>`;
        document.getElementById(loadingId).outerHTML = errorResponse; //Replace the loading div.
        scrollToBottom();
      }).finally(() => {
         //Make the send button visible again.
         userInputSendBtn.classList.remove('send-btn-hide');
      });
  }
}

//Event listener for the Send button.
userInputSendBtn.addEventListener('click', function () {
  userInputValue = userInput.value;
  userInput.value = '';

  if (!userInputValue.trim()) return; //Do nothing if input is empty.

  //Add user message to the chat container.
  let userRequest = `<div class="user-chat-box">
        <div class="response-text">${userInputValue}</div>
        <p class="time">${getTime()}</p>
      </div>`;
  chatContainer.insertAdjacentHTML("beforeend", userRequest);
  scrollToBottom();

  //Call the update function to handle the AI response.
  update();
});


