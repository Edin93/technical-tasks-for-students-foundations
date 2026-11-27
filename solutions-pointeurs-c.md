# Corrigé : tableaux, chaînes et pointeurs en C

## Défi 1 - Afficher un tableau d’entiers

```c
#include <stdio.h>

int main(void) {
    int valeurs[] = {3, 6, 9, 12};
    int taille = (int)(sizeof valeurs / sizeof valeurs[0]);
    int i;

    for (i = 0; i < taille; i++) {
        if (i > 0) {
            printf(" ");
        }
        printf("%d", valeurs[i]);
    }
    printf("\n");
    return 0;
}
```

## Défi 2 - Calculer la somme d’un tableau

```c
#include <stdio.h>

int main(void) {
    int valeurs[] = {4, 7, 2, 9, 3};
    int taille = (int)(sizeof valeurs / sizeof valeurs[0]);
    int somme = 0;
    int i;

    for (i = 0; i < taille; i++) {
        somme += valeurs[i];
    }
    printf("Somme : %d\n", somme);
    return 0;
}
```

## Défi 3 - Trouver la plus grande valeur

```c
#include <stdio.h>

int main(void) {
    int valeurs[] = {5, 12, 3, 9, 7};
    int taille = (int)(sizeof valeurs / sizeof valeurs[0]);
    int maximum = valeurs[0];
    int i;

    for (i = 1; i < taille; i++) {
        if (valeurs[i] > maximum) {
            maximum = valeurs[i];
        }
    }
    printf("Maximum : %d\n", maximum);
    return 0;
}
```

## Défi 4 - Copier un tableau

```c
#include <stdio.h>

int main(void) {
    int source[] = {2, 4, 6, 8};
    int destination[4];
    int taille = (int)(sizeof source / sizeof source[0]);
    int i;

    for (i = 0; i < taille; i++) {
        destination[i] = source[i];
    }
    for (i = 0; i < taille; i++) {
        if (i > 0) {
            printf(" ");
        }
        printf("%d", destination[i]);
    }
    printf("\n");
    return 0;
}
```

## Défi 5 - Afficher un tableau à deux dimensions

```c
#include <stdio.h>

int main(void) {
    int grille[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int ligne;
    int colonne;

    for (ligne = 0; ligne < 2; ligne++) {
        for (colonne = 0; colonne < 3; colonne++) {
            if (colonne > 0) {
                printf(" ");
            }
            printf("%d", grille[ligne][colonne]);
        }
        printf("\n");
    }
    return 0;
}
```

## Défi 6 - Additionner les valeurs d’une matrice

```c
#include <stdio.h>

int main(void) {
    int valeurs[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int somme = 0;
    int ligne;
    int colonne;

    for (ligne = 0; ligne < 2; ligne++) {
        for (colonne = 0; colonne < 3; colonne++) {
            somme += valeurs[ligne][colonne];
        }
    }
    printf("Somme : %d\n", somme);
    return 0;
}
```

## Défi 7 - Additionner la diagonale d’une matrice

```c
#include <stdio.h>

int main(void) {
    int matrice[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    int somme = 0;
    int i;

    for (i = 0; i < 3; i++) {
        somme += matrice[i][i];
    }
    printf("Somme de la diagonale : %d\n", somme);
    return 0;
}
```

## Défi 8 - Afficher une chaîne de caractères

```c
#include <stdio.h>

int main(void) {
    char mot[] = "Bonjour";
    printf("Mot : %s\n", mot);
    printf("Première lettre : %c\n", mot[0]);
    return 0;
}
```

## Défi 9 - Compter les caractères d’une chaîne

```c
#include <stdio.h>

int main(void) {
    char mot[] = "pointeur";
    int longueur = 0;

    while (mot[longueur] != '\0') {
        longueur++;
    }
    printf("Longueur : %d\n", longueur);
    return 0;
}
```

## Défi 10 - Compter les voyelles dans une chaîne

```c
#include <stdio.h>

int main(void) {
    char texte[] = "programmation";
    int voyelles = 0;
    int i;

    for (i = 0; texte[i] != '\0'; i++) {
        if (texte[i] == 'a' || texte[i] == 'e' || texte[i] == 'i' ||
            texte[i] == 'o' || texte[i] == 'u') {
            voyelles++;
        }
    }
    printf("Voyelles : %d\n", voyelles);
    return 0;
}
```

## Défi 11 - Parcourir une chaîne avec un pointeur

```c
#include <stdio.h>

int main(void) {
    const char *texte = "C facile";
    const char *pointeur = texte;

    while (*pointeur != '\0') {
        printf("%c", *pointeur);
        pointeur++;
    }
    printf("\n");
    return 0;
}
```

## Défi 12 - Modifier un tableau de caractères avec un pointeur

```c
#include <stdio.h>

int main(void) {
    char mot[] = "chat";
    char *pointeur = mot;

    *pointeur = 'C';
    printf("%s\n", mot);
    return 0;
}
```

## Défi 13 - Lire une valeur à travers un pointeur

```c
#include <stdio.h>

int main(void) {
    int nombre = 42;
    int *pointeur = &nombre;

    printf("Valeur : %d\n", *pointeur);
    return 0;
}
```

## Défi 14 - Modifier une variable avec un pointeur

```c
#include <stdio.h>

void ajouterUn(int *nombre) {
    *nombre = *nombre + 1;
}

int main(void) {
    int valeur = 10;
    ajouterUn(&valeur);
    printf("Valeur après l’appel : %d\n", valeur);
    return 0;
}
```

## Défi 15 - Observer le passage par valeur

```c
#include <stdio.h>

void mettreAZero(int nombre) {
    nombre = 0;
    (void)nombre;
}

int main(void) {
    int valeur = 7;
    mettreAZero(valeur);
    printf("Après l’appel : %d\n", valeur);
    return 0;
}
```

## Défi 16 - Échanger deux valeurs avec des pointeurs

```c
#include <stdio.h>

void echanger(int *a, int *b) {
    int temporaire = *a;
    *a = *b;
    *b = temporaire;
}

int main(void) {
    int a = 3;
    int b = 8;
    echanger(&a, &b);
    printf("a : %d\n", a);
    printf("b : %d\n", b);
    return 0;
}
```

## Défi 17 - Additionner un tableau dans une fonction

```c
#include <stdio.h>

int sommeTableau(const int valeurs[], int taille) {
    int somme = 0;
    int i;
    for (i = 0; i < taille; i++) {
        somme += valeurs[i];
    }
    return somme;
}

int main(void) {
    int valeurs[] = {2, 4, 6, 8};
    int taille = (int)(sizeof valeurs / sizeof valeurs[0]);
    printf("Somme : %d\n", sommeTableau(valeurs, taille));
    return 0;
}
```

## Défi 18 - Parcourir un tableau par arithmétique de pointeurs

```c
#include <stdio.h>

int main(void) {
    int valeurs[] = {10, 20, 30};
    int *pointeur = valeurs;
    int taille = (int)(sizeof valeurs / sizeof valeurs[0]);
    int i;

    for (i = 0; i < taille; i++) {
        if (i > 0) {
            printf(" ");
        }
        printf("%d", *(pointeur + i));
    }
    printf("\n");
    return 0;
}
```

## Défi 19 - Passer une matrice à une fonction

```c
#include <stdio.h>

int sommeMatrice(int valeurs[][3], int nombreLignes) {
    int somme = 0;
    int ligne;
    int colonne;
    for (ligne = 0; ligne < nombreLignes; ligne++) {
        for (colonne = 0; colonne < 3; colonne++) {
            somme += valeurs[ligne][colonne];
        }
    }
    return somme;
}

int main(void) {
    int matrice[2][3] = {{1, 2, 3}, {4, 5, 6}};
    printf("Somme de la matrice : %d\n", sommeMatrice(matrice, 2));
    return 0;
}
```

## Défi 20 - Lire une valeur avec un pointeur vers un pointeur

```c
#include <stdio.h>

int main(void) {
    int nombre = 42;
    int *pointeur = &nombre;
    int **pointeurVersPointeur = &pointeur;

    printf("Valeur : %d\n", **pointeurVersPointeur);
    return 0;
}
```

## Défi 21 - Modifier un pointeur avec un pointeur vers un pointeur

```c
#include <stdio.h>

void changerCible(int **pointeur, int *nouvelleCible) {
    *pointeur = nouvelleCible;
}

int main(void) {
    int premier = 5;
    int second = 9;
    int *pointeur = &premier;

    changerCible(&pointeur, &second);
    printf("Valeur pointée : %d\n", *pointeur);
    return 0;
}
```
