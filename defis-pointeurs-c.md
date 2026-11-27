# Défis C : tableaux, chaînes et pointeurs

## Consignes générales

- Les défis sont indépendants : crée un fichier `.c` différent pour chacun
- Pour ne pas les mélanger avec les autres défis du site, place-les dans un dossier `defis-tableaux-pointeurs`
- Utilise GCC sous Ubuntu 22 ou 24 LTS
- Avec le standard demandé, déclare les variables avant les boucles, pas dans l’en-tête du `for`
- Compile depuis le dossier qui contient le fichier, puis exécute le programme
- Les tableaux ont une taille connue dans chaque exercice
- En C, les arguments sont toujours transmis par valeur. Pour qu’une fonction puisse modifier une variable du programme appelant, on lui transmet son adresse à l’aide d’un pointeur. On appelle souvent cela un passage par référence

## Défi 1 - Afficher un tableau d’entiers

Déclare le tableau `{3, 6, 9, 12}`. Parcours-le avec une boucle `for` et affiche ses éléments sur une ligne, séparés par des espaces.

- Fichier : `defi01.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi01.c -o defi01`
- Exécution : `./defi01`

Sortie attendue :

```text
3 6 9 12
```

## Défi 2 - Calculer la somme d’un tableau

Déclare le tableau `{4, 7, 2, 9, 3}`. Parcours-le, calcule la somme de ses éléments et affiche le résultat.

- Fichier : `defi02.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi02.c -o defi02`
- Exécution : `./defi02`

Sortie attendue :

```text
Somme : 25
```

## Défi 3 - Trouver la plus grande valeur

À partir du tableau `{5, 12, 3, 9, 7}`, trouve et affiche la plus grande valeur. Initialise ta variable de maximum avec le premier élément du tableau.

- Fichier : `defi03.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi03.c -o defi03`
- Exécution : `./defi03`

Sortie attendue :

```text
Maximum : 12
```

## Défi 4 - Copier un tableau

Déclare un tableau source `{2, 4, 6, 8}` et un tableau destination de quatre entiers. Copie chaque élément du tableau source dans le tableau destination à l’aide d’une boucle, puis affiche le tableau destination.

- Fichier : `defi04.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi04.c -o defi04`
- Exécution : `./defi04`

Sortie attendue :

```text
2 4 6 8
```

## Défi 5 - Afficher un tableau à deux dimensions

Déclare le tableau suivant :

```c
int grille[2][3] = {{1, 2, 3}, {4, 5, 6}};
```

Utilise deux boucles imbriquées pour l’afficher sous forme de deux lignes.

- Fichier : `defi05.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi05.c -o defi05`
- Exécution : `./defi05`

Sortie attendue :

```text
1 2 3
4 5 6
```

## Défi 6 - Additionner les valeurs d’une matrice

Avec le tableau `{{1, 2, 3}, {4, 5, 6}}`, calcule et affiche la somme de toutes les valeurs. Parcours toutes les lignes et colonnes avec deux boucles imbriquées.

- Fichier : `defi06.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi06.c -o defi06`
- Exécution : `./defi06`

Sortie attendue :

```text
Somme : 21
```

## Défi 7 - Additionner la diagonale d’une matrice

Déclare une matrice carrée de trois lignes et trois colonnes contenant les lignes `{1, 2, 3}`, `{4, 5, 6}` et `{7, 8, 9}`. Additionne les éléments de sa diagonale principale, c’est-à-dire ceux dont l’indice de ligne est égal à l’indice de colonne.

- Fichier : `defi07.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi07.c -o defi07`
- Exécution : `./defi07`

Sortie attendue :

```text
Somme de la diagonale : 15
```

## Défi 8 - Afficher une chaîne de caractères

Déclare le tableau de caractères `"Bonjour"`. Affiche la chaîne complète avec `%s`, puis affiche son premier caractère avec `%c`.

- Fichier : `defi08.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi08.c -o defi08`
- Exécution : `./defi08`

Sortie attendue :

```text
Mot : Bonjour
Première lettre : B
```

## Défi 9 - Compter les caractères d’une chaîne

Déclare le tableau de caractères `"pointeur"`. Sans utiliser `strlen`, parcours la chaîne jusqu’au caractère nul `\0` et compte ses caractères. Affiche la longueur obtenue.

- Fichier : `defi09.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi09.c -o defi09`
- Exécution : `./defi09`

Sortie attendue :

```text
Longueur : 8
```

## Défi 10 - Compter les voyelles dans une chaîne

Dans la chaîne `"programmation"`, compte les voyelles `a`, `e`, `i`, `o` et `u`, puis affiche leur nombre. Pour ce défi, toutes les lettres sont en minuscules.

- Fichier : `defi10.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi10.c -o defi10`
- Exécution : `./defi10`

Sortie attendue :

```text
Voyelles : 5
```

## Défi 11 - Parcourir une chaîne avec un pointeur

Déclare un pointeur vers le texte constant `"C facile"`. Parcours la chaîne en avançant le pointeur d’un caractère à la fois et affiche chaque caractère. Le texte ne doit pas être modifié.

- Fichier : `defi11.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi11.c -o defi11`
- Exécution : `./defi11`

Sortie attendue :

```text
C facile
```

## Défi 12 - Modifier un tableau de caractères avec un pointeur

Déclare le tableau de caractères modifiable `"chat"`. Crée un pointeur vers son premier élément et utilise ce pointeur pour remplacer la première lettre par `C`. Affiche ensuite le mot.

- Fichier : `defi12.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi12.c -o defi12`
- Exécution : `./defi12`

Sortie attendue :

```text
Chat
```

## Défi 13 - Lire une valeur à travers un pointeur

Déclare un entier égal à 42 et un pointeur qui contient son adresse. Affiche la valeur de l’entier en passant par le pointeur.

- Fichier : `defi13.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi13.c -o defi13`
- Exécution : `./defi13`

Sortie attendue :

```text
Valeur : 42
```

## Défi 14 - Modifier une variable avec un pointeur

Écris une fonction `void ajouterUn(int *nombre)` qui ajoute 1 à l’entier pointé. Dans `main`, appelle cette fonction avec l’adresse d’une variable initialisée à 10, puis affiche cette variable.

- Fichier : `defi14.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi14.c -o defi14`
- Exécution : `./defi14`

Sortie attendue :

```text
Valeur après l’appel : 11
```

## Défi 15 - Observer le passage par valeur

Déclare un entier égal à 7. Écris une fonction `void mettreAZero(int nombre)` qui affecte 0 à son paramètre. Appelle cette fonction, puis affiche la variable originale depuis `main`. Observe si elle a changé.

- Fichier : `defi15.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi15.c -o defi15`
- Exécution : `./defi15`

Sortie attendue :

```text
Après l’appel : 7
```

## Défi 16 - Échanger deux valeurs avec des pointeurs

Écris une fonction `void echanger(int *a, int *b)` qui échange les valeurs des deux entiers pointés. Dans `main`, appelle-la avec les adresses de deux variables initialisées à 3 et 8, puis affiche les valeurs après l’échange.

- Fichier : `defi16.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi16.c -o defi16`
- Exécution : `./defi16`

Sortie attendue :

```text
a : 8
b : 3
```

## Défi 17 - Additionner un tableau dans une fonction

Écris une fonction `int sommeTableau(const int valeurs[], int taille)` qui reçoit un tableau et sa taille, puis renvoie la somme de ses éléments. Appelle-la avec `{2, 4, 6, 8}` et affiche la somme.

- Fichier : `defi17.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi17.c -o defi17`
- Exécution : `./defi17`

Sortie attendue :

```text
Somme : 20
```

## Défi 18 - Parcourir un tableau par arithmétique de pointeurs

Déclare le tableau `{10, 20, 30}` et un pointeur vers son premier élément. Affiche ses trois valeurs en utilisant l’arithmétique de pointeurs, par exemple `*(pointeur + indice)`, sans utiliser la notation `valeurs[indice]` pour lire les éléments.

- Fichier : `defi18.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi18.c -o defi18`
- Exécution : `./defi18`

Sortie attendue :

```text
10 20 30
```

## Défi 19 - Passer une matrice à une fonction

Écris une fonction `int sommeMatrice(int valeurs[][3], int nombreLignes)` qui renvoie la somme d’une matrice ayant trois colonnes. Appelle-la avec la matrice `{{1, 2, 3}, {4, 5, 6}}` et affiche le résultat.

- Fichier : `defi19.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi19.c -o defi19`
- Exécution : `./defi19`

Sortie attendue :

```text
Somme de la matrice : 21
```

## Défi 20 - Lire une valeur avec un pointeur vers un pointeur

Déclare un entier égal à 42, un pointeur vers cet entier, puis un pointeur vers ce pointeur. Affiche l’entier en déréférençant deux fois le dernier pointeur.

- Fichier : `defi20.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi20.c -o defi20`
- Exécution : `./defi20`

Sortie attendue :

```text
Valeur : 42
```

## Défi 21 - Modifier un pointeur avec un pointeur vers un pointeur

Déclare deux entiers, 5 et 9, puis un pointeur qui désigne le premier. Écris une fonction `void changerCible(int **pointeur, int *nouvelleCible)` qui fait pointer ce pointeur vers le second entier. Appelle la fonction en lui passant l’adresse du pointeur, puis affiche la valeur désormais pointée.

- Fichier : `defi21.c`
- Compilation : `gcc -Wall -pedantic -Werror -Wextra -std=gnu89 defi21.c -o defi21`
- Exécution : `./defi21`

Sortie attendue :

```text
Valeur pointée : 9
```

