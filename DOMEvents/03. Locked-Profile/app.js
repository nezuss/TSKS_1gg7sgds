function lockedProfile() {
  const buttons = Array.from(document.querySelectorAll(".profile button"));

  buttons.forEach((button) => {
    button.addEventListener("click", onClick);
  });

  function onClick(event) {
    const btn = event.target;
    const profile = btn.parentNode;
    const unlockRadio = profile.querySelector('input[value="unlock"]');
    const hiddenDiv = profile.querySelector("div");

    if (unlockRadio.checked) {
      if (btn.textContent === "Show more") {
        hiddenDiv.style.display = "block";
        btn.textContent = "Hide it";
      } else if (btn.textContent === "Hide it") {
        hiddenDiv.style.display = "none";
        btn.textContent = "Show more";
      }
    }
  }
}
