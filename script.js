// JavaScript to handle tabs and text formatting
const replyTab = document.getElementById("reply-tab");
const notesTab = document.getElementById("notes-tab");
const chatInput = document.querySelector(".chat-input");
// const fileInput=document.getElementById('file-input')

replyTab.addEventListener("click", () => {
  chatInput.placeholder = "Type your reply...";
});

notesTab.addEventListener("click", () => {
  chatInput.placeholder = "Type your notes...";
});

function formatText(style) {
  document.execCommand(style, false, null);
}

// Add a click event listener to the smiley icon
document.getElementById('face-smile').addEventListener('click', function() {
  // Insert a smiley emoji when the icon is clicked
  insertEmoji('😊'); // You can use any emoji you like
});

// Function to insert an emoji at the cursor position
function insertEmoji(emoji) {
  const chatInput = document.getElementById('chat-input');
  const cursorPosition = chatInput.selectionStart;
  const textBeforeCursor = chatInput.value.substring(0, cursorPosition);
  const textAfterCursor = chatInput.value.substring(cursorPosition);
  chatInput.value = textBeforeCursor + emoji + textAfterCursor;
  chatInput.focus(); // Refocus the chat input
}


document.getElementById("bold").addEventListener("click", function () {
  const textArea = document.querySelector(".chat-input");
  textArea.classList.toggle("bold");
});

document.getElementById("italic-button").addEventListener("click", function () {
  const textArea = document.querySelector(".chat-input");
  textArea.classList.toggle("italic-text");
});

document
  .getElementById("underline-button")
  .addEventListener("click", function () {
    const textArea = document.querySelector(".chat-input");
    textArea.classList.toggle("underline-button");
  });

document.getElementById("text-slash").addEventListener("click", function () {
  const textArea = document.querySelector(".chat-input");
  textArea.classList.toggle("text-slash");
});

document.getElementById("paperclip").addEventListener("click", function () {
  const fileInput = document.getElementById("file-input");
  fileInput.click();
});

document.getElementById("file-input").addEventListener("change", function () {
  const selectedFile = this.files[0];
  if (selectedFile) {
    alert("Selected file: " + selectedFile.name);
  }
});
document
  .querySelector(".attach-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const messageInput = document.querySelector(".chat-input");
    const message = messageInput.value;
    if (message.trim() !== "") {
      console.log("Sending message:", message);
      messageInput.value = "";
    }
  });

const sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", function () {
  alert("Message sent!");
});
