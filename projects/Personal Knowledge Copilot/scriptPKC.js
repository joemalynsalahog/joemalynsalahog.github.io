document.addEventListener("DOMContentLoaded", () => {

  // 1️⃣ Highlight active sidebar button
  const sidebarButtons = document.querySelectorAll("aside nav button");
  sidebarButtons.forEach(button => {
    button.addEventListener("click", () => {
      sidebarButtons.forEach(btn => btn.classList.remove("bg-gray-300"));
      button.classList.add("bg-gray-300");
    });
  });

  // Elements
  const chatBox = document.getElementById("chatBox");
  const placeholder = document.getElementById("placeholderText");
  const chatInput = document.querySelector("main input[type='text']");
  const pdfInput = document.getElementById("fileUpload");

  // Function to hide placeholder
  const hidePlaceholder = () => {
    if (placeholder) {
      placeholder.style.display = "none";
      chatBox.classList.remove("items-center", "justify-center");
    }
  };

  // 2️⃣ Handle PDF upload
  if (pdfInput) {
    pdfInput.addEventListener("change", () => {
      const file = pdfInput.files[0];
      if (file) {
        hidePlaceholder();

        const fileMsg = document.createElement("div");
        fileMsg.className = "bg-green-100 text-green-800 rounded p-2 mb-2 max-w-xs";
        fileMsg.textContent = `Uploaded: ${file.name}`;

        chatBox.appendChild(fileMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
      }
    });
  }

  // 3️⃣ Handle chat messages
  if (chatBox && chatInput) {

    const sendBtn = chatInput.nextElementSibling;

    const appendMessage = (text, isUser = true) => {

      hidePlaceholder();

      const msgEl = document.createElement("div");

      msgEl.className = isUser
        ? "bg-blue-500 text-white rounded p-2 mb-2 ml-auto max-w-xs"
        : "bg-gray-200 text-gray-800 rounded p-2 mb-2 mr-auto max-w-xs";

      msgEl.textContent = text;

      chatBox.appendChild(msgEl);
      chatBox.scrollTop = chatBox.scrollHeight;
    };

    sendBtn.addEventListener("click", () => {
      const message = chatInput.value.trim();
      if (!message) return;

      appendMessage(message, true);
      chatInput.value = "";

      // Fake AI response
      setTimeout(() => {
        appendMessage("AI: I have received your message.", false);
      }, 800);
    });

    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendBtn.click();
    });

  }

});