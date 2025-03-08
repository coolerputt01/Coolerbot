# CoolerBot 🤖

A friendly Vue.js-based chatbot interface!

## Description

CoolerBot is a modern, interactive chatbot interface built with Vue.js. It provides a clean and intuitive way for users to interact with AI models or custom bots. This project showcases components for displaying chat messages, handling user input, and managing the overall chat window. It's designed to be easily customizable and extendable, making it a great starting point for any chatbot application.

## ✨ Features

*   **Clean UI**: A simple and intuitive user interface for a seamless chat experience.
*   **Component-Based Architecture**: Modular design with reusable components for messages, input, and navigation.
*   **Vue Router**: Implemented with Vue Router for potential future expansion with multiple views.
*   **Easy Customization**: Designed for easy customization and integration with various AI models or backend services.
*   **Axios Integration**: Ready for API calls to connect with your AI backend (using Axios).

## 🔧 Installation

Follow these steps to get CoolerBot up and running on your local machine:

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd cooler-bot
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run serve
    ```

    This will start the Vue.js development server, and you can access the application in your browser at `http://localhost:8080` (or the address shown in your terminal).

## 💻 Usage

Once the application is running, you can start interacting with the chatbot. The `UserInput` component allows you to type and send messages, which will then appear in the `ChatWindow` component. The `AiMessage` and `UserMessage` components display the respective messages.

Here's a basic overview of the main components:

*   **ChatWindow.vue**: The main chat window that displays messages.
*   **UserInput.vue**: The input field for users to type their messages.
*   **AiMessage.vue**: Displays messages from the AI.
*   **UserMessage.vue**: Displays messages from the user.

Feel free to modify these components and integrate your own AI backend for a fully functional chatbot.

## 🛠️ Technologies Used

| Technology   | Description                                          |
| :----------- | :--------------------------------------------------- |
| Vue.js       | JavaScript framework for building user interfaces    |
| Vue Router   | For navigation and routing                            |
| Axios        | Promise-based HTTP client for making API requests    |
| Typed.js     | JavaScript Typing animation library                  |
| core-js      | Modular standard library for JavaScript             |
| Javascript   | Programming Language                               |
| HTML         | Markup language for structuring web content          |
| CSS          | Styling language for visual presentation           |

## 🤝 Contributing

We welcome contributions to CoolerBot! Here's how you can contribute:

1.  **Fork the repository.**
2.  **Create a new branch** for your feature or bug fix.
3.  **Make your changes** and ensure they are well-tested.
4.  **Submit a pull request** with a clear description of your changes.

Please ensure your code follows the project's coding standards and includes appropriate tests.

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

[![Built with Dokugen](https://img.shields.io/badge/Built%20with-Dokugen-brightgreen)](https://github.com/samueltuoyo15/Dokugen)
