
document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ Highlight active sidebar button
  const sidebarButtons = document.querySelectorAll("aside nav button");
  if (sidebarButtons.length > 0) {
    sidebarButtons.forEach(button => {
      button.addEventListener("click", () => {
        sidebarButtons.forEach(btn => btn.classList.remove("bg-gray-300"));
        button.classList.add("bg-gray-300");
      });
    });
  }

  // 2️⃣ Handle PDF upload
  const pdfInput = document.querySelector('input[type="file"]');
  const centerMessage = document.querySelector("main h1");

  if (pdfInput && centerMessage) {
    pdfInput.addEventListener("change", () => {
      const file = pdfInput.files[0];
      if (file) {
        centerMessage.textContent = `Uploaded: ${file.name}`;
      } else {
        centerMessage.textContent = "Hello! Upload a file to get started";
      }
    });
  }

  // 3️⃣ Handle chat messages
  const chatBox = document.getElementById("chatBox");
  const chatInput = document.querySelector("main input[type='text']");
  if (chatBox && chatInput) {
    const sendBtn = chatInput.nextElementSibling; // the Send button
    if (sendBtn) {
      const appendMessage = (text, isUser = true) => {
        const msgEl = document.createElement("div");
        msgEl.className = isUser
          ? "bg-blue-500 text-white rounded p-2 mb-2 self-end max-w-xs"
          : "bg-gray-200 text-gray-800 rounded p-2 mb-2 self-start max-w-xs";
        msgEl.textContent = text;
        chatBox.appendChild(msgEl);
        chatBox.scrollTop = chatBox.scrollHeight;
      };

      sendBtn.addEventListener("click", () => {
        const message = chatInput.value.trim();
        if (!message) return;
        appendMessage(message, true);
        chatInput.value = "";

        // AI reply placeholder
        setTimeout(() => {
          appendMessage("AI: I have received your message.", false);
        }, 800);
      });

      chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") sendBtn.click();
      });
    }
  }
});
