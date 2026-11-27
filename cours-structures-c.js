/* Interactions partagées par les cours sur les tableaux et les pointeurs. */
document.querySelectorAll(".validate-question").forEach(function (button) {
  button.addEventListener("click", function () {
    var question = button.closest(".quick-question");
    var selected = question.querySelector("input[type=radio]:checked");
    var feedback = question.querySelector(".quiz-feedback");
    var correctInput = question.querySelector('input[value="' + question.dataset.answer + '"]');
    var correctLabel = correctInput ? correctInput.parentNode.textContent.trim() : question.dataset.answer;
    question.querySelectorAll("label").forEach(function (label) {
      label.classList.remove("is-correct", "is-wrong");
      var input = label.querySelector("input");
      if (input && input.value === question.dataset.answer) {
        label.classList.add("is-correct");
      }
      if (input && input === selected && input.value !== question.dataset.answer) {
        label.classList.add("is-wrong");
      }
    });
    if (!selected) {
      feedback.textContent = "Choisis une réponse. La bonne réponse est : " + correctLabel + ". " + question.dataset.explanation;
      feedback.className = "quiz-feedback is-neutral";
    } else if (selected.value === question.dataset.answer) {
      feedback.textContent = "Bonne réponse ! " + question.dataset.explanation;
      feedback.className = "quiz-feedback is-correct";
    } else {
      feedback.textContent = "Pas tout à fait. La bonne réponse est : " + correctLabel + ". " + question.dataset.explanation;
      feedback.className = "quiz-feedback is-wrong";
    }
  });
});

document.querySelectorAll(".true-false button").forEach(function (button) {
  button.addEventListener("click", function () {
    var question = button.closest(".quick-question");
    var feedback = question.querySelector(".quiz-feedback");
    var correctChoice = question.querySelector('.true-false button[data-choice="' + question.dataset.answer + '"]');
    var correctText = correctChoice ? correctChoice.textContent : question.dataset.answer;
    question.querySelectorAll(".true-false button").forEach(function (choice) {
      choice.classList.remove("is-selected", "is-correct", "is-wrong");
      choice.setAttribute("aria-pressed", "false");
      if (choice.dataset.choice === question.dataset.answer) {
        choice.classList.add("is-correct");
      }
    });
    button.classList.add("is-selected");
    button.setAttribute("aria-pressed", "true");
    if (button.dataset.choice === question.dataset.answer) {
      feedback.textContent = "Bonne réponse ! " + question.dataset.explanation;
      feedback.className = "quiz-feedback is-correct";
    } else {
      button.classList.add("is-wrong");
      feedback.textContent = "Pas tout à fait. La bonne réponse est : " + correctText + ". " + question.dataset.explanation;
      feedback.className = "quiz-feedback is-wrong";
    }
  });
});

document.querySelectorAll("#array-map [data-array-cell]").forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelectorAll("#array-map [data-array-cell]").forEach(function (cell) {
      cell.classList.remove("is-selected");
      cell.setAttribute("aria-pressed", "false");
    });
    button.classList.add("is-selected");
    button.setAttribute("aria-pressed", "true");
    var value = button.querySelector("strong").textContent;
    document.getElementById("array-map-status").textContent =
      "La case d’indice " + button.dataset.arrayCell + " contient la valeur " + value + ".";
  });
});

document.querySelectorAll("#string-demo [data-position]").forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelectorAll("#string-demo [data-position]").forEach(function (cell) {
      cell.classList.remove("is-selected");
      cell.setAttribute("aria-pressed", "false");
    });
    button.classList.add("is-selected");
    button.setAttribute("aria-pressed", "true");
    var character = button.dataset.position === "4" ? "le caractère nul \\0" : "le caractère « " + button.textContent + " »";
    document.getElementById("string-map-status").textContent =
      "À l’indice " + button.dataset.position + ", la chaîne contient " + character + ".";
  });
});

var pointerNext = document.getElementById("pointer-demo-next");
if (pointerNext) {
  pointerNext.addEventListener("click", function () {
    document.getElementById("pointer-demo-value").textContent = "50";
    document.getElementById("pointer-demo-status").textContent =
      "*p désigne la valeur de score : l’écriture via le pointeur a donc changé score à 50.";
  });
}

document.querySelectorAll("[data-parameter-call]").forEach(function (button) {
  button.addEventListener("click", function () {
    var value = document.getElementById("parameter-value");
    var status = document.getElementById("parameter-status");
    var action = button.dataset.parameterCall;
    if (action === "reset") {
      value.textContent = "7";
      status.textContent = "Choisis un appel pour comparer la copie et la modification par pointeur.";
      return;
    }
    if (action === "value") {
      value.textContent = "7";
      status.textContent = "La fonction a mis sa copie locale à 0; score reste à 7.";
      return;
    }
    value.textContent = "8";
    status.textContent = "La fonction a augmenté *p; comme p contient l’adresse de score, score vaut maintenant 8.";
  });
});

