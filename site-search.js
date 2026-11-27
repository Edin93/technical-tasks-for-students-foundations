(function () {
  var form = document.getElementById("site-search-form");
  if (!form) return;
  var input = document.getElementById("site-search");
  var clearButton = document.getElementById("clear-site-search");
  var status = document.getElementById("site-search-status");
  var results = document.getElementById("site-search-results");
  var catalog = document.getElementById("page-catalog");
  var items = [
  {
    "type": "Page",
    "title": "Défis C",
    "description": "Variables, conditions, boucles, tableaux et fonctions",
    "href": "defis-c.html",
    "tags": "programmation C exercice"
  },
  {
    "type": "Page",
    "title": "Révisions : notions de base en C",
    "description": "Explications et exemples sur les bases du langage C",
    "href": "notions-c-bases.html",
    "tags": "cours variables conditions boucles"
  },
  {
    "type": "Page",
    "title": "Défis : tableaux, chaînes et pointeurs",
    "description": "21 exercices sur les tableaux, les strings, les pointeurs et les paramètres",
    "href": "defis-pointeurs-c.html",
    "tags": "C tableaux strings chaînes pointeurs valeur référence"
  },
  {
    "type": "Page",
    "title": "Défis C : bases 2",
    "description": "30 exercices progressifs et quiz",
    "href": "defis-c-bases-2.html",
    "tags": "variables fonctions boucles exercices"
  },
  {
    "type": "Page",
    "title": "Cours interactif : bases du C",
    "description": "Explications pas à pas, mini-quiz et visualisation de code",
    "href": "cours-c-bases-2.html",
    "tags": "cours débutant"
  },
  {
    "type": "Cours",
    "title": "Tableaux simples et tableaux 2D",
    "description": "Indices, parcours, fonctions, lignes et colonnes",
    "href": "cours-tableaux-c.html",
    "tags": "array matrice grille tableau entier"
  },
  {
    "type": "Cours",
    "title": "Chaînes de caractères",
    "description": "char[], char *, caractère nul et parcours",
    "href": "cours-chaines-c.html",
    "tags": "string chaine texte caractère pointeur"
  },
  {
    "type": "Cours",
    "title": "Pointeurs et pointeurs vers pointeurs",
    "description": "Adresses, déréférencement, NULL et int **",
    "href": "cours-pointeurs-c.html",
    "tags": "pointer adresse mémoire double pointeur"
  },
  {
    "type": "Cours",
    "title": "Passage par valeur et par adresse",
    "description": "Paramètres de fonction et modification via pointeur",
    "href": "cours-passage-parametres-c.html",
    "tags": "fonction référence argument paramètre valeur"
  },
  {
    "type": "Fiche résumé",
    "title": "Résumé : tableaux en C",
    "description": "Indices, tableaux simples, matrices et paramètres",
    "href": "resume-tableaux-c.md",
    "tags": "aide-mémoire révision"
  },
  {
    "type": "Fiche résumé",
    "title": "Résumé : chaînes en C",
    "description": "char[], char *, terminaison et parcours",
    "href": "resume-chaines-c.md",
    "tags": "aide-mémoire révision string"
  },
  {
    "type": "Fiche résumé",
    "title": "Résumé : pointeurs en C",
    "description": "Adresse, valeur pointée, NULL et int **",
    "href": "resume-pointeurs-c.md",
    "tags": "aide-mémoire révision"
  },
  {
    "type": "Fiche résumé",
    "title": "Résumé : paramètres de fonction",
    "description": "Passage par valeur, pointeur et adresse",
    "href": "resume-passage-parametres-c.md",
    "tags": "aide-mémoire révision"
  },
  {
    "type": "Exercice",
    "title": "Défi 1 - Compter de 0 à 100",
    "description": "Défis C",
    "href": "defis-c.html#defi-01",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 2 - Les nombres pairs",
    "description": "Défis C",
    "href": "defis-c.html#defi-02",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 3 - Compter les voyelles d’une chaîne",
    "description": "Défis C",
    "href": "defis-c.html#defi-03",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 4 - Appréciation d’une note",
    "description": "Défis C",
    "href": "defis-c.html#defi-04",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 5 - Compter les éléments d’un tableau",
    "description": "Défis C",
    "href": "defis-c.html#defi-05",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 6 - Dessiner un triangle",
    "description": "Défis C",
    "href": "defis-c.html#defi-06",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 7 - Rectangle et carré",
    "description": "Défis C",
    "href": "defis-c.html#defi-07",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 8 - Calculs sur un tableau",
    "description": "Défis C",
    "href": "defis-c.html#defi-08",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 9 - Parcourir un tableau à deux dimensions",
    "description": "Défis C",
    "href": "defis-c.html#defi-09",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 10 - FizzBuzz",
    "description": "Défis C",
    "href": "defis-c.html#defi-10",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 11 - Un mot palindrome",
    "description": "Défis C",
    "href": "defis-c.html#defi-11",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 1 - Afficher un tableau d’entiers",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-01",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 2 - Calculer la somme d’un tableau",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-02",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 3 - Trouver la plus grande valeur",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-03",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 4 - Copier un tableau",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-04",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 5 - Afficher un tableau à deux dimensions",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-05",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 6 - Additionner les valeurs d’une matrice",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-06",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 7 - Additionner la diagonale d’une matrice",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-07",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 8 - Afficher une chaîne de caractères",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-08",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 9 - Compter les caractères d’une chaîne",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-09",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 10 - Compter les voyelles dans une chaîne",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-10",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 11 - Parcourir une chaîne avec un pointeur",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-11",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 12 - Modifier un tableau de caractères avec un pointeur",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-12",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 13 - Lire une valeur à travers un pointeur",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-13",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 14 - Modifier une variable avec un pointeur",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-14",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 15 - Observer le passage par valeur",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-15",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 16 - Échanger deux valeurs avec des pointeurs",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-16",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 17 - Additionner un tableau dans une fonction",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-17",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 18 - Parcourir un tableau par arithmétique de pointeurs",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-18",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 19 - Passer une matrice à une fonction",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-19",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 20 - Lire une valeur avec un pointeur vers un pointeur",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-20",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Défi 21 - Modifier un pointeur avec un pointeur vers un pointeur",
    "description": "Défis tableaux et pointeurs",
    "href": "defis-pointeurs-c.html#defi-21",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 1 - Compter de 0 à 10",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-01",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 2 - Compter de 50 à 100",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-02",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 3 - Afficher l’alphabet",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-03",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 4 - Afficher un entier",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-04",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 5 - Afficher un long int",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-05",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 6 - Afficher un nombre décimal",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-06",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 7 - Afficher un caractère et une chaîne",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-07",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 8 - Garder une valeur constante",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-08",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 9 - Pair ou impair",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-09",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 10 - Positif, négatif ou nul",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-10",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 11 - Appréciation d’une note",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-11",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 12 - Trouver le maximum de trois nombres",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-12",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 13 - Calculer une somme avec for",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-13",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 14 - Compte à rebours avec while",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-14",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 15 - Répéter avec do while",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-15",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 16 - Ignorer les multiples de trois",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-16",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 17 - Arrêter une boucle avec break",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-17",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 18 - Afficher les nombres pairs avec while",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-18",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 19 - Table de multiplication",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-19",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 20 - Dessiner un rectangle",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-20",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 21 - Dessiner un carré",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-21",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 22 - Dessiner un triangle",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-22",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 23 - Dessiner un triangle inversé",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-23",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 24 - FizzBuzz de 1 à 15",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-24",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 25 - Reconnaître un palindrome",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-25",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 26 - Fonction sans paramètre et sans retour",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-26",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 27 - Fonction void avec un paramètre entier",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-27",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 28 - Fonction void avec un paramètre caractère",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-28",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 29 - Fonctions qui renvoient un entier",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-29",
    "tags": "C programmation défi pratique"
  },
  {
    "type": "Exercice",
    "title": "Exercice 30 - Fonctions qui renvoient un caractère",
    "description": "Défis C bases 2",
    "href": "defis-c-bases-2.html#defi-30",
    "tags": "C programmation défi pratique"
  }
];

  var concepts = [
    { type: "Notion", title: "Tableau simple et indices", description: "Déclaration, initialisation, accès et limites des indices", href: "cours-tableaux-c.html#simple", tags: "array int cases taille zéro" },
    { type: "Notion", title: "Parcourir un tableau dans une fonction", description: "Boucle for, taille explicite et paramètre const", href: "cours-tableaux-c.html#parcourir", tags: "array fonction somme" },
    { type: "Notion", title: "Tableau à deux dimensions", description: "Grille, matrice, lignes, colonnes et boucles imbriquées", href: "cours-tableaux-c.html#deux-dimensions", tags: "2d matrice grille" },
    { type: "Notion", title: "Chaîne C et caractère nul", description: "Comprendre char[], la fin de chaîne et le stockage", href: "cours-chaines-c.html#chaine", tags: "string texte zero nul" },
    { type: "Notion", title: "Tableau char et pointeur char", description: "Distinguer char[] modifiable et const char *", href: "cours-chaines-c.html#tableau-ou-pointeur", tags: "string char array pointer" },
    { type: "Notion", title: "Parcourir une chaîne avec un pointeur", description: "Lire *p, avancer avec p++ et compter des caractères", href: "cours-chaines-c.html#parcourir", tags: "string char pointeur voyelles" },
    { type: "Notion", title: "Adresse et déréférencement", description: "Utiliser &variable et *p pour accéder à une valeur", href: "cours-pointeurs-c.html#adresse", tags: "pointer mémoire valeur" },
    { type: "Notion", title: "Sécurité des pointeurs et NULL", description: "Initialiser et vérifier une cible avant de la déréférencer", href: "cours-pointeurs-c.html#securite", tags: "adresse pointeur null" },
    { type: "Notion", title: "Arithmétique de pointeurs", description: "Parcourir les cases d’un tableau avec p + i", href: "cours-pointeurs-c.html#arithmetique", tags: "tableau pointer array" },
    { type: "Notion", title: "Pointeur vers pointeur int **", description: "Lire deux niveaux d’indirection et changer une cible", href: "cours-pointeurs-c.html#double", tags: "double pointeur adresse" },
    { type: "Notion", title: "Passage par valeur", description: "Une fonction reçoit une copie de l’argument", href: "cours-passage-parametres-c.html#valeur", tags: "fonction paramètre copie" },
    { type: "Notion", title: "Modification par adresse", description: "Donner &variable à une fonction qui reçoit un pointeur", href: "cours-passage-parametres-c.html#adresse", tags: "référence pointeur fonction" },
    { type: "Notion", title: "Tableaux en paramètre", description: "Transmettre la taille et protéger les éléments avec const", href: "cours-passage-parametres-c.html#tableaux", tags: "array fonction paramètre matrice" },
    { type: "Notion", title: "Variables et constantes", description: "Déclarer, initialiser et utiliser const en C", href: "cours-c-bases-2.html#variables", tags: "int long float char" },
    { type: "Notion", title: "Conditions if else", description: "Choisir un bloc selon une condition", href: "cours-c-bases-2.html#conditions", tags: "comparaison logique" },
    { type: "Notion", title: "Boucles for while do while", description: "Répéter des instructions et suivre une variable", href: "cours-c-bases-2.html#boucles", tags: "loop itération" },
    { type: "Notion", title: "Boucles imbriquées, break et continue", description: "Parcourir une grille et contrôler une répétition", href: "cours-c-bases-2.html#controle", tags: "nested loops grille" },
    { type: "Notion", title: "Fonctions en C", description: "Paramètres, type de retour, appel et prototype", href: "cours-c-bases-2.html#fonctions", tags: "void main int char" },
    { type: "Notion", title: "Afficher avec printf", description: "Formats %d, %ld, %f, %c, %s et retour à la ligne", href: "cours-c-bases-2.html#printf", tags: "sortie affichage" }
  ];
  items = items.concat(concepts);
  function normalize(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("fr");
  }

  function addResult(item) {
    var link = document.createElement("a");
    var kind = document.createElement("strong");
    var title = document.createElement("span");
    var description = document.createElement("small");
    link.className = "site-search-result";
    link.href = item.href;
    kind.textContent = item.type;
    title.textContent = " · " + item.title;
    description.textContent = item.description;
    link.appendChild(kind);
    link.appendChild(title);
    link.appendChild(description);
    results.appendChild(link);
  }

  function search() {
    var query = normalize(input.value.trim());
    results.replaceChildren();
    if (query.length === 0) {
      results.hidden = true;
      catalog.hidden = false;
      status.textContent = "Toutes les ressources sont affichées.";
      return;
    }
    var matches = items.map(function (item) {
      var title = normalize(item.title);
      var searchable = normalize(item.type + " " + item.title + " " + item.description + " " + item.tags);
      return { item: item, score: title.indexOf(query) === 0 ? 0 : (title.indexOf(query) >= 0 ? 1 : 2), found: searchable.indexOf(query) >= 0 };
    }).filter(function (entry) { return entry.found; }).sort(function (a, b) { return a.score - b.score; });
    var visibleMatches = matches.slice(0, 60);
    visibleMatches.forEach(function (entry) { addResult(entry.item); });
    results.hidden = false;
    catalog.hidden = true;
    if (matches.length === 0) {
      status.textContent = "Aucun résultat. Essaie un autre mot ou efface la recherche.";
    } else if (matches.length > visibleMatches.length) {
      status.textContent = "Affichage des 60 premiers résultats sur " + matches.length + " ressources.";
    } else {
      status.textContent = matches.length + (matches.length > 1 ? " ressources trouvées." : " ressource trouvée.");
    }
  }

  input.addEventListener("input", search);
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    search();
    var first = results.querySelector("a");
    if (first) first.focus();
  });
  clearButton.addEventListener("click", function () {
    input.value = "";
    search();
    input.focus();
  });
})();


