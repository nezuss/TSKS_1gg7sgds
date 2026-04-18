function encodeAndDecodeMessages() {
  let buttons = document.querySelectorAll("button");
  let textareas = document.querySelectorAll("textarea");
  let encodeButton = buttons[0];
  let decodeButton = buttons[1];
  let senderTextarea = textareas[0];
  let receiverTextarea = textareas[1];

  encodeButton.addEventListener("click", function () {
    let message = senderTextarea.value;
    let encodedMessage = "";

    for (let i = 0; i < message.length; i++) {
      let currentCode = message.charCodeAt(i);

      encodedMessage += String.fromCharCode(currentCode + 1);
    }

    receiverTextarea.value = encodedMessage;
    senderTextarea.value = "";
  });

  decodeButton.addEventListener("click", function () {
    let message = receiverTextarea.value;
    let decodedMessage = "";

    for (let i = 0; i < message.length; i++) {
      let currentCode = message.charCodeAt(i);

      decodedMessage += String.fromCharCode(currentCode - 1);
    }

    receiverTextarea.value = decodedMessage;
  });
}
