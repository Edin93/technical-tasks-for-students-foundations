document.querySelectorAll(".validate-question").forEach(function (button) {
  button.addEventListener("click", function () {
    var question = button.closest(".quick-question");
    var selected = question.querySelector("input[type=radio]:checked");
    var feedback = question.querySelector(".quiz-feedback");
    question.querySelectorAll("label").forEach(function (label) {
      label.classList.remove("is-correct", "is-wrong");
      var input = label.querySelector("input");
      if (input && input.value === question.dataset.answer) {
        label.classList.add("is-correct");
      }
      if (input && selected === input && input.value !== question.dataset.answer) {
        label.classList.add("is-wrong");
      }
    });
    if (!selected) {
      feedback.textContent = "Choisis une réponse. " + question.dataset.explanation;
      feedback.className = "quiz-feedback is-neutral";
    } else if (selected.value === question.dataset.answer) {
      feedback.textContent = "Bonne réponse ! " + question.dataset.explanation;
      feedback.className = "quiz-feedback is-correct";
    } else {
      feedback.textContent = "Pas tout à fait. " + question.dataset.explanation;
      feedback.className = "quiz-feedback is-wrong";
    }
  });
});

document.querySelectorAll(".true-false button").forEach(function (button) {
  button.addEventListener("click", function () {
    var question = button.closest(".quick-question");
    var feedback = question.querySelector(".quiz-feedback");
    question.querySelectorAll(".true-false button").forEach(function (choice) {
      choice.classList.remove("is-selected", "is-correct", "is-wrong");
      if (choice.dataset.choice === question.dataset.answer) {
        choice.classList.add("is-correct");
      }
    });
    button.classList.add("is-selected");
    if (button.dataset.choice === question.dataset.answer) {
      feedback.textContent = "Bonne réponse ! " + question.dataset.explanation;
      feedback.className = "quiz-feedback is-correct";
    } else {
      button.classList.add("is-wrong");
      feedback.textContent = "Pas tout à fait. " + question.dataset.explanation;
      feedback.className = "quiz-feedback is-wrong";
    }
  });
});

var memory = { declared: false, initialized: false, value: null };
var memoryLabel = document.getElementById("memory-label");
var memoryValue = document.getElementById("memory-value");
var memoryExplanation = document.getElementById("memory-explanation");

document.querySelectorAll("[data-memory]").forEach(function (button) {
  button.addEventListener("click", function () {
    var action = button.dataset.memory;
    if (action === "reset") {
      memory = { declared: false, initialized: false, value: null };
      memoryLabel.textContent = "Pas encore déclarée";
      memoryValue.textContent = "—";
      memoryExplanation.textContent = "Commence par déclarer la variable.";
      return;
    }
    if (action === "declare") {
      memory.declared = true;
      memory.initialized = false;
      memory.value = null;
      memoryLabel.textContent = "Variable déclarée";
      memoryValue.textContent = "indéterminée";
      memoryExplanation.textContent = "L’emplacement existe. Sa valeur n’est pas initialisée : ne la lis pas encore.";
      return;
    }
    if (!memory.declared) {
      memoryExplanation.textContent = "Déclare d’abord la variable avant de lui attribuer une valeur.";
      return;
    }
    if (action === "initialize") {
      memory.initialized = true;
      memory.value = 0;
      memoryLabel.textContent = "Initialisée";
      memoryValue.textContent = "0";
      memoryExplanation.textContent = "La première valeur de score est maintenant 0.";
      return;
    }
    if (action === "assign") {
      if (!memory.initialized) {
        memoryExplanation.textContent = "Initialise d’abord score avant de remplacer sa valeur.";
        return;
      }
      memory.value = 8;
      memoryLabel.textContent = "Valeur modifiée";
      memoryValue.textContent = "8";
      memoryExplanation.textContent = "score contenait 0; l’affectation score = 8 l’a remplacé.";
    }
  });
});

var loopStep = -1;
var loopOutput = [];
var loopValue = document.getElementById("loop-value");
var loopLine = document.getElementById("loop-line");
var loopCells = Array.from(document.querySelectorAll("#loop-track span"));

function resetLoop() {
  loopStep = -1;
  loopOutput = [];
  loopValue.textContent = "—";
  loopLine.textContent = "Prêt à démarrer";
  loopCells.forEach(function (cell) {
    cell.classList.remove("is-active", "is-done");
  });
}

document.getElementById("loop-next").addEventListener("click", function () {
  loopCells.forEach(function (cell) { cell.classList.remove("is-active"); });
  if (loopStep < 3) {
    loopStep++;
    loopValue.textContent = String(loopStep);
    loopCells[loopStep].classList.add("is-active", "is-done");
    loopOutput.push(String(loopStep));
    loopLine.textContent = "Tour " + (loopStep + 1) + " : la condition est vraie, printf affiche " + loopStep + ", puis i augmente.";
    return;
  }
  loopValue.textContent = "4";
  loopLine.textContent = "i vaut 4 : la condition i <= 3 est fausse. La boucle s’arrête. Sortie : " + loopOutput.join(" ");
});
document.getElementById("loop-reset").addEventListener("click", resetLoop);

document.querySelectorAll("#grid-visual button").forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelectorAll("#grid-visual button").forEach(function (cell) {
      cell.classList.remove("is-row", "is-col", "is-selected");
    });
    var row = button.dataset.row;
    var col = button.dataset.col;
    document.querySelectorAll('#grid-visual button[data-row="' + row + '"]').forEach(function (cell) {
      cell.classList.add("is-row");
    });
    document.querySelectorAll('#grid-visual button[data-col="' + col + '"]').forEach(function (cell) {
      cell.classList.add("is-col");
    });
    button.classList.add("is-selected");
    document.getElementById("grid-explanation").textContent =
      "Tu as choisi la case " + (Number(row) + 1) + "," + (Number(col) + 1) +
      " (indices C : grille[" + row + "][" + col + "]).";
  });
});

var visualizerExamples = {
  variable: '#include <stdio.h>\n\nint main(void) {\n    int score;\n    score = 0;\n    score = 8;\n    printf("Score : %d\\n", score);\n    return 0;\n}',
  loop: '#include <stdio.h>\n\nint main(void) {\n    int i;\n    for (i = 0; i < 4; i++) {\n        printf("%d\\n", i);\n    }\n    return 0;\n}',
  array: '#include <stdio.h>\n\nint main(void) {\n    int notes[3] = {12, 15, 9};\n    int i;\n    for (i = 0; i < 3; i++) {\n        printf("%d\\n", notes[i]);\n    }\n    return 0;\n}',
  function: '#include <stdio.h>\n\nint doubler(int nombre) {\n    return nombre * 2;\n}\n\nint main(void) {\n    int resultat;\n    resultat = doubler(4);\n    printf("%d\\n", resultat);\n    return 0;\n}'
};

var visualizer = document.getElementById("python-tutor-frame");
var visualizerSelect = document.getElementById("visualizer-example");

function loadVisualizer(key) {
  var code = visualizerExamples[key];
  var encoded = encodeURIComponent(code);
  visualizer.src = "https://pythontutor.com/iframe-embed.html?via=ai#code=" +
    encoded + "&mode=display&py=c&curInstr=0";
}

visualizerSelect.addEventListener("change", function () {
  loadVisualizer(visualizerSelect.value);
});
loadVisualizer(visualizerSelect.value);

var progressBar = document.getElementById("reading-progress-bar");
window.addEventListener("scroll", function () {
  var scrollable = document.documentElement.scrollHeight - window.innerHeight;
  var progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = Math.min(100, Math.max(0, progress)) + "%";
}, { passive: true });

if ("IntersectionObserver" in window) {
  var sectionLinks = document.querySelectorAll("#course-navigation a");
  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach(function (link) {
        link.classList.toggle("is-current", link.hash === "#" + entry.target.id);
      });
    });
  }, { rootMargin: "-20% 0px -70% 0px" });
  document.querySelectorAll(".course-card[id]").forEach(function (section) {
    sectionObserver.observe(section);
  });
}
