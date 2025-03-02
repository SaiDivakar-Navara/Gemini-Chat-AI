async function askAI() {
    const input = document.getElementById("user-input").value;
    document.getElementById("responseText").innerText = "Generating response...";

    try {
        const response = await fetch("http://127.0.0.1:8000/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: input }),
        });

        const data = await response.json();
        if (data && data.candidates && data.candidates[0].content.parts[0].text) {
            document.getElementById("responseText").innerText = data.candidates[0].content.parts[0].text;
        } else {
            document.getElementById("responseText").innerText = "No response from AI.";
        }
    } catch (error) {
        document.getElementById("responseText").innerText = "Error: " + error.message;
    }
}