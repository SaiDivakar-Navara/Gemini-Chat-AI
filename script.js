async function askAI() {
    const inputField = document.getElementById("user-input");
    const responseContainer = document.getElementById("response-container");
    const userText = inputField.value.trim();

    if (userText === "") return; // Prevent empty submissions

    // Add user's message to the response container
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.innerText = userText;
    responseContainer.appendChild(userMessage);

    // Clear input field
    inputField.value = "";

    // Show a loading message
    const aiMessage = document.createElement("div");
    aiMessage.classList.add("message", "ai-message");
    aiMessage.innerText = "Generating response...";
    responseContainer.appendChild(aiMessage);

    try {
        const response = await fetch("http://127.0.0.1:8000/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: userText }),
        });

        const data = await response.json();
        if (data && data.candidates && data.candidates[0].content.parts[0].text) {
            aiMessage.innerText = data.candidates[0].content.parts[0].text;
        } else {
            aiMessage.innerText = "No response from AI.";
        }
    } catch (error) {
        aiMessage.innerText = "Error: " + error.message;
    }

    // Scroll to the bottom
    responseContainer.scrollTop = responseContainer.scrollHeight;
}
