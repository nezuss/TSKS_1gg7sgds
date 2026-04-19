function getArticleGenerator(articles) {
  let contentDiv = document.getElementById("content");

  return function () {
    if (articles.length > 0) {
      let currentText = articles.shift();
      let newArticle = document.createElement("article");

      newArticle.textContent = currentText;

      contentDiv.appendChild(newArticle);
    }
  };
}
