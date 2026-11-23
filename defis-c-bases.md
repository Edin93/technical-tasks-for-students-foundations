# Défis de programmation en C

## Consignes générales

- Chaque défi est un programme indépendant à enregistrer dans le fichier indiqué
- Utiliser `#include <stdio.h>` et écrire une fonction `main` dans chaque programme. Pour les défis de fonctions, écrire la fonction demandée puis l’appeler depuis `main`.
- Créer un dossier nommé `defis-c-bases` et mettre tout le travail dedans.
- Compiler avec GCC depuis le dossier contenant le fichier
- Sous Ubuntu 22 ou 24 LTS, lancer le programme avec la commande indiquée
- Respecter les espaces et les retours à la ligne de la sortie attendue

## Défi 1 - Compter de 0 à 100

Écris un programme qui affiche tous les entiers de 0 à 100 inclus sur une seule ligne, séparés par un espace.

- Fichier : `defi01.c`
- Compilation : `gcc -std=c11 -Wall -Wextra defi01.c -o defi01`
- Exécution : `./defi01`

Sortie attendue :

```text
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100
```

## Défi 2 - Les nombres pairs

Avec une boucle `while`, affiche les nombres pairs de 0 à 100 inclus, sur une seule ligne et séparés par un espace.

- Fichier : `defi02.c`
- Compilation : `gcc -std=c11 -Wall -Wextra defi02.c -o defi02`
- Exécution : `./defi02`

Sortie attendue :

```text
0 2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56 58 60 62 64 66 68 70 72 74 76 78 80 82 84 86 88 90 92 94 96 98 100
```

## Défi 3 - Compter les voyelles d’une chaîne

Déclare un tableau de caractères contenant la chaîne `Bonjour les amis`. Parcours la chaîne et compte ses voyelles (`a`, `e`, `i`, `o`, `u`, `y`), qu’elles soient en majuscules ou en minuscules. Les espaces ne sont pas des voyelles.

- Fichier : `defi03.c`
- Compilation : `gcc -std=c11 -Wall -Wextra defi03.c -o defi03`
- Exécution : `./defi03`

Sortie attendue :

```text
La chaîne "Bonjour les amis" contient 6 voyelles.
```

## Défi 4 - Appréciation d’une note

Déclare une note entière égale à 14 et utilise `if`, `else if` et `else` pour afficher l’appréciation correspondante. Barème : moins de 10 = « À retravailler », de 10 à 11 = « Passable », de 12 à 13 = « Assez bien », de 14 à 15 = « Bien », de 16 à 20 = « Très bien ». Toute valeur hors de l’intervalle 0 à 20 doit afficher « Note invalide ».

- Fichier : `defi04.c`
- Compilation : `gcc -std=c11 -Wall -Wextra defi04.c -o defi04`
- Exécution : `./defi04`

Sortie attendue :

```text
Note : 14
Appréciation : Bien
```

## Défi 5 - Compter les éléments d’un tableau

Déclare un tableau d’entiers contenant les valeurs `{3, 8, 1, 6, 4, 9}`. Calcule le nombre d’éléments du tableau, puis affiche ce nombre. Utilise `sizeof` pour obtenir le nombre d’éléments à partir de la taille totale du tableau et de celle d’un élément.

- Fichier : `defi05.c`
- Compilation : `gcc -std=c11 -Wall -Wextra defi05.c -o defi05`
- Exécution : `./defi05`

Sortie attendue :

```text
Le tableau contient 6 éléments.
```

## Défi 6 - Dessiner un triangle

Avec des boucles imbriquées, dessine un triangle rectangle de 5 lignes à l’aide du caractère `*`.

- Fichier : `defi06.c`
- Compilation : `gcc -std=c11 -Wall -Wextra defi06.c -o defi06`
- Exécution : `./defi06`

Sortie attendue :

```text
*
**
***
****
*****
```

## Défi 7 - Rectangle et carré

Affiche d’abord un rectangle de 8 caractères de largeur et 3 lignes de hauteur, puis un carré de 4 caractères de côté. Utilise des boucles imbriquées et affiche les libellés ci-dessous.

- Fichier : `defi07.c`
- Compilation : `gcc -std=c11 -Wall -Wextra defi07.c -o defi07`
- Exécution : `./defi07`

Sortie attendue :

```text
Rectangle :
********
********
********
Carré :
****
****
****
****
```

## Défi 8 - Calculs sur un tableau

À partir du tableau d’entiers `{4, 7, 2, 9, 3}`, calcule la somme et la moyenne. Affiche aussi chaque valeur. Utilise une boucle et des spécificateurs adaptés dans `printf`.

- Fichier : `defi08.c`
- Compilation : `gcc -std=c11 -Wall -Wextra defi08.c -o defi08`
- Exécution : `./defi08`

Sortie attendue :

```text
Valeurs : 4 7 2 9 3
Somme : 25
Moyenne : 5.00
```

## Défi 9 - Parcourir un tableau à deux dimensions

Déclare le tableau à deux dimensions suivant :

```c
int valeurs[2][3] = {{1, 2, 3}, {4, 5, 6}};
```

Parcours-le avec deux boucles imbriquées, affiche les lignes, puis calcule et affiche la somme de toutes les valeurs.

- Fichier : `defi09.c`
- Compilation : `gcc -std=c11 -Wall -Wextra defi09.c -o defi09`
- Exécution : `./defi09`

Sortie attendue :

```text
1 2 3
4 5 6
Somme : 21
```

## Défi 10 - FizzBuzz

Pour chaque entier de 1 à 20, affiche `Fizz` s’il est divisible par 3, `Buzz` s’il est divisible par 5, `FizzBuzz` s’il est divisible par les deux, et l’entier lui-même dans les autres cas. Affiche un élément par ligne. Vérifie le cas divisible par 3 et 5 avant les autres cas.

- Fichier : `defi10.c`
- Compilation : `gcc -std=c11 -Wall -Wextra defi10.c -o defi10`
- Exécution : `./defi10`

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
16
17
Fizz
19
Buzz
```

## Défi 11 - Un mot palindrome

Un palindrome se lit de la même façon de gauche à droite et de droite à gauche. Écris une fonction `void is_palindrome(const char chaine[])` qui analyse la chaîne reçue et affiche si elle est un palindrome ou non. La comparaison est sensible aux majuscules et aux minuscules.

Enregistre la fonction dans `is_palindrome.c`. Utilise le fichier de test `main_test.c` ci-dessous, sans le modifier, pour appeler la fonction avec plusieurs chaînes.

```c
#include <stdio.h>

void is_palindrome(const char chaine[]);

int main(void) {
    is_palindrome("radar");
    is_palindrome("bonjour");
    is_palindrome("kayak");
    return 0;
}
```

- Fichier à coder : `is_palindrome.c`
- Fichier de test : `main_test.c`
- Compilation : `gcc -std=c11 -Wall -Wextra main_test.c is_palindrome.c -o defi11`
- Exécution : `./defi11`

Sortie attendue :

```text
radar est un palindrome.
bonjour n'est pas un palindrome.
kayak est un palindrome.
```


