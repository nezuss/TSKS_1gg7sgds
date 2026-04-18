function solve() {
  let rightAnswers = 0;
  let currentStep = 0;
  const correctAnswers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents",
  ];
  const sections = document.querySelectorAll("section");
  const resultsContainer = document.querySelector("#results");
  const resultsText = document.querySelector("#results h1");
  const answers = document.querySelectorAll(".quiz-answer");

  answers.forEach((answer) => {
    answer.addEventListener("click", function (event) {
      const selectedText = event.currentTarget.textContent.trim();

      if (selectedText === correctAnswers[currentStep]) {
        rightAnswers++;
      }

      sections[currentStep].style.display = "none";

      currentStep++;

      if (currentStep < sections.length) {
        sections[currentStep].style.display = "block";
      } else {
        resultsContainer.style.display = "block";

        if (rightAnswers === 3) {
          resultsText.textContent = "You are recognized as top JavaScript fan!";
        } else {
          resultsText.textContent = `You have ${rightAnswers} right answers`;
        }
      }
    });
  });
}
