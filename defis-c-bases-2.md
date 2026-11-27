# Défis C : bases, conditions, boucles et fonctions

Ce cahier contient 30 exercices progressifs et un quiz final noté sur 10 points. Chaque défi est un programme autonome à écrire dans le fichier indiqué.

## Consignes générales

- Utilise GCC sous Ubuntu 22, 24 ou 26 LTS
- Pour chaque exercice, compile puis exécute le fichier depuis le terminal
- Respecte exactement la sortie attendue, y compris les espaces et les retours à la ligne
- Avec `gnu89` et `-pedantic -Werror`, déclare les variables au début de chaque bloc, avant les instructions. Ne déclare pas une variable directement dans l’en-tête d’une boucle `for`
- Les exercices utilisent des valeurs définies dans le programme; aucune saisie clavier n’est nécessaire

## Exercice 01 - Compter de 0 à 10

Affiche les nombres de 0 à 10 inclus, séparés par un espace, sur une seule ligne.

- Fichier : `exercice-01.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-01.c -o exercice-01`
- Exécution : `./exercice-01`

Sortie attendue :

```text
0 1 2 3 4 5 6 7 8 9 10
```

## Exercice 02 - Compter de 50 à 100

Affiche tous les nombres de 50 à 100 inclus, séparés par un espace.

- Fichier : `exercice-02.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-02.c -o exercice-02`
- Exécution : `./exercice-02`

Sortie attendue :

```text
50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100
```

## Exercice 03 - Afficher l’alphabet

Affiche toutes les lettres minuscules de `a` à `z` sur une seule ligne, sans espace.

- Fichier : `exercice-03.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-03.c -o exercice-03`
- Exécution : `./exercice-03`

Sortie attendue :

```text
abcdefghijklmnopqrstuvwxyz
```

## Exercice 04 - Afficher un entier

Déclare un entier `nombre` égal à 42 et affiche-le avec un libellé.

- Fichier : `exercice-04.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-04.c -o exercice-04`
- Exécution : `./exercice-04`

Sortie attendue :

```text
Nombre : 42
```

## Exercice 05 - Afficher un long int

Déclare une variable de type `long int` égale à 1234567890 et affiche sa valeur avec le spécificateur adapté à ce type.

- Fichier : `exercice-05.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-05.c -o exercice-05`
- Exécution : `./exercice-05`

Sortie attendue :

```text
Distance : 1234567890
```

## Exercice 06 - Afficher un nombre décimal

Déclare un `float` nommé `prix` et initialise-le à 12,5. Affiche-le avec deux chiffres après la virgule.

- Fichier : `exercice-06.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-06.c -o exercice-06`
- Exécution : `./exercice-06`

Sortie attendue :

```text
Prix : 12.50
```

## Exercice 07 - Afficher un caractère et une chaîne

Déclare le caractère `M` et le tableau de caractères `Marie`. Affiche le caractère avec `%c` et la chaîne avec `%s`.

- Fichier : `exercice-07.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-07.c -o exercice-07`
- Exécution : `./exercice-07`

Sortie attendue :

```text
Initiale : M
Prénom : Marie
```

## Exercice 08 - Garder une valeur constante

Déclare `const int LIMITE` avec la valeur 10 et affiche cette valeur. Ne tente pas de la modifier.

- Fichier : `exercice-08.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-08.c -o exercice-08`
- Exécution : `./exercice-08`

Sortie attendue :

```text
Limite : 10
```

## Exercice 09 - Pair ou impair

Déclare un entier égal à 14. Avec une condition, affiche s’il est pair ou impair.

- Fichier : `exercice-09.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-09.c -o exercice-09`
- Exécution : `./exercice-09`

Sortie attendue :

```text
14 est pair.
```

## Exercice 10 - Positif, négatif ou nul

Déclare un entier égal à -3. Utilise `if`, `else if` et `else` pour déterminer s’il est positif, négatif ou nul.

- Fichier : `exercice-10.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-10.c -o exercice-10`
- Exécution : `./exercice-10`

Sortie attendue :

```text
-3 est négatif.
```

## Exercice 11 - Appréciation d’une note

Déclare une note égale à 15 et affiche son appréciation avec `if`, `else if` et `else`. Utilise ces catégories : moins de 10 « Insuffisant », de 10 à 11 « Passable », de 12 à 13 « Assez bien », de 14 à 15 « Bien », à partir de 16 « Très bien ».

- Fichier : `exercice-11.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-11.c -o exercice-11`
- Exécution : `./exercice-11`

Sortie attendue :

```text
Note : 15
Appréciation : Bien
```

## Exercice 12 - Trouver le maximum de trois nombres

Déclare les entiers 8, 12 et 5. Avec des conditions, détermine puis affiche le plus grand.

- Fichier : `exercice-12.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-12.c -o exercice-12`
- Exécution : `./exercice-12`

Sortie attendue :

```text
Maximum : 12
```

## Exercice 13 - Calculer une somme avec for

Utilise une boucle `for` pour calculer la somme des entiers de 1 à 10 inclus, puis affiche le résultat.

- Fichier : `exercice-13.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-13.c -o exercice-13`
- Exécution : `./exercice-13`

Sortie attendue :

```text
Somme : 55
```

## Exercice 14 - Compte à rebours avec while

Avec une boucle `while`, affiche les nombres de 5 à 1, un nombre par ligne, puis affiche `Partez !`.

- Fichier : `exercice-14.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-14.c -o exercice-14`
- Exécution : `./exercice-14`

Sortie attendue :

```text
5
4
3
2
1
Partez !
```

## Exercice 15 - Répéter avec do while

Utilise une boucle `do while` pour afficher les nombres de 1 à 5, un nombre par ligne.

- Fichier : `exercice-15.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-15.c -o exercice-15`
- Exécution : `./exercice-15`

Sortie attendue :

```text
1
2
3
4
5
```

## Exercice 16 - Ignorer les multiples de trois

Affiche les nombres de 1 à 10. Utilise `continue` pour ne pas afficher les multiples de 3.

- Fichier : `exercice-16.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-16.c -o exercice-16`
- Exécution : `./exercice-16`

Sortie attendue :

```text
1 2 4 5 7 8 10
```

## Exercice 17 - Arrêter une boucle avec break

Parcours les entiers de 1 à 10 et affiche-les. Utilise `break` pour arrêter la boucle après avoir affiché 7.

- Fichier : `exercice-17.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-17.c -o exercice-17`
- Exécution : `./exercice-17`

Sortie attendue :

```text
1 2 3 4 5 6 7
```

## Exercice 18 - Afficher les nombres pairs avec while

Avec une boucle `while`, affiche les nombres pairs de 0 à 20 inclus, séparés par un espace.

- Fichier : `exercice-18.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-18.c -o exercice-18`
- Exécution : `./exercice-18`

Sortie attendue :

```text
0 2 4 6 8 10 12 14 16 18 20
```

## Exercice 19 - Table de multiplication

Affiche la table de multiplication de 6, de `6 x 1` à `6 x 5`, une opération par ligne.

- Fichier : `exercice-19.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-19.c -o exercice-19`
- Exécution : `./exercice-19`

Sortie attendue :

```text
6 x 1 = 6
6 x 2 = 12
6 x 3 = 18
6 x 4 = 24
6 x 5 = 30
```

## Exercice 20 - Dessiner un rectangle

Avec deux boucles imbriquées, dessine un rectangle de 7 astérisques de largeur et de 3 lignes de hauteur.

- Fichier : `exercice-20.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-20.c -o exercice-20`
- Exécution : `./exercice-20`

Sortie attendue :

```text
*******
*******
*******
```

## Exercice 21 - Dessiner un carré

Avec deux boucles imbriquées, dessine un carré de 4 astérisques de côté.

- Fichier : `exercice-21.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-21.c -o exercice-21`
- Exécution : `./exercice-21`

Sortie attendue :

```text
****
****
****
****
```

## Exercice 22 - Dessiner un triangle

Avec deux boucles imbriquées, dessine un triangle rectangle de 5 lignes.

- Fichier : `exercice-22.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-22.c -o exercice-22`
- Exécution : `./exercice-22`

Sortie attendue :

```text
*
**
***
****
*****
```

## Exercice 23 - Dessiner un triangle inversé

Avec deux boucles imbriquées, dessine un triangle inversé de 5 lignes.

- Fichier : `exercice-23.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-23.c -o exercice-23`
- Exécution : `./exercice-23`

Sortie attendue :

```text
*****
****
***
**
*
```

## Exercice 24 - FizzBuzz de 1 à 15

Affiche les nombres de 1 à 15, un par ligne. Pour les multiples de 3, affiche `Fizz`; pour ceux de 5, `Buzz`; pour ceux de 3 et 5, `FizzBuzz`. Vérifie d’abord le dernier cas.

- Fichier : `exercice-24.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-24.c -o exercice-24`
- Exécution : `./exercice-24`

Sortie attendue :

```text
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```

## Exercice 25 - Reconnaître un palindrome

Déclare le tableau de caractères `radar`. Avec une boucle et des conditions, détermine si le mot se lit de la même manière dans les deux sens, puis affiche le résultat. Compare les caractères en minuscules, sans espaces ni ponctuation.

- Fichier : `exercice-25.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-25.c -o exercice-25`
- Exécution : `./exercice-25`

Sortie attendue :

```text
radar est un palindrome.
```

## Exercice 26 - Fonction sans paramètre et sans retour

Tout programme démarre dans la fonction `main`. Dans les exercices, elle est écrite sous la forme `int main(void)` et renvoie 0 à la fin pour indiquer que le programme s’est terminé correctement.

Écris `void afficherBonjour(void)`, une fonction sans paramètre qui affiche `Bonjour !`. Appelle-la depuis `main`.

- Fichier : `exercice-26.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-26.c -o exercice-26`
- Exécution : `./exercice-26`

Sortie attendue :

```text
Bonjour !
```

## Exercice 27 - Fonction void avec un paramètre entier

Écris `void afficherDouble(int nombre)`. La fonction affiche le double de son paramètre. Appelle-la avec 6 depuis `main`.

- Fichier : `exercice-27.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-27.c -o exercice-27`
- Exécution : `./exercice-27`

Sortie attendue :

```text
Double : 12
```

## Exercice 28 - Fonction void avec un paramètre caractère

Écris `void afficherLettre(char lettre)`. La fonction affiche la lettre reçue. Appelle-la avec le caractère `Z`.

- Fichier : `exercice-28.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-28.c -o exercice-28`
- Exécution : `./exercice-28`

Sortie attendue :

```text
Lettre : Z
```

## Exercice 29 - Fonctions qui renvoient un entier

Écris `int obtenirDix(void)`, qui renvoie 10, et `int additionner(int a, int b)`, qui renvoie la somme de ses deux paramètres. Appelle les deux fonctions depuis `main` et affiche leurs résultats.

- Fichier : `exercice-29.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-29.c -o exercice-29`
- Exécution : `./exercice-29`

Sortie attendue :

```text
Valeur : 10
Somme : 7
```

## Exercice 30 - Fonctions qui renvoient un caractère

Écris `char obtenirInitiale(void)`, qui renvoie `M`, et `char mettreEnMajuscule(char lettre)`, qui renvoie la majuscule correspondant à une lettre minuscule ASCII reçue en paramètre. Teste les deux fonctions depuis `main`.

- Fichier : `exercice-30.c`
- Compilation : `gcc -Wall -Werror -pedantic -Wextra -std=gnu89 exercice-30.c -o exercice-30`
- Exécution : `./exercice-30`

Sortie attendue :

```text
Initiale : M
Majuscule : A
```

## Quiz final - 10 points

Chaque affirmation vaut 1 point. Choisis « Vrai » ou « Faux ». Le score final est sur 10. Le corrigé des réponses se trouve dans le fichier de solutions.

1. Le spécificateur `printf` pour un `long int` est `%ld`.
   - [ ] Vrai
   - [ ] Faux
2. En C, un caractère seul s’écrit entre guillemets doubles, comme `"A"`.
   - [ ] Vrai
   - [ ] Faux
3. Une variable déclarée `const` ne doit pas être modifiée après son initialisation.
   - [ ] Vrai
   - [ ] Faux
4. Le premier élément d’un tableau a l’indice 0.
   - [ ] Vrai
   - [ ] Faux
5. L’expression `nombre % 2 == 0` teste si `nombre` est pair.
   - [ ] Vrai
   - [ ] Faux
6. Une boucle `while` peut exécuter son corps zéro fois.
   - [ ] Vrai
   - [ ] Faux
7. Le corps d’une boucle `do while` s’exécute au moins une fois.
   - [ ] Vrai
   - [ ] Faux
8. `break` quitte la boucle la plus proche qui contient cette instruction.
   - [ ] Vrai
   - [ ] Faux
9. `continue` termine complètement la boucle.
   - [ ] Vrai
   - [ ] Faux
10. Une fonction déclarée `void afficher(void)` reçoit un paramètre et renvoie un entier.
    - [ ] Vrai
    - [ ] Faux

## Éditeur C en ligne (facultatif)

Tu peux essayer le code dans [l’éditeur C en ligne de JDoodle](https://www.jdoodle.com/c-online-compiler/). Il permet d’écrire et d’exécuter un fichier C dans le navigateur. Pour valider un exercice, utilise toutefois la commande GCC fournie ci-dessus, car l’éditeur en ligne peut utiliser une version ou des options différentes.
