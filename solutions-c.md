# Solutions des défis de programmation en C

## Défi 1 - Compter de 0 à 100

```c
#include <stdio.h>

int main(void) {
    for (int i = 0; i <= 100; i++) {
        if (i > 0) {
            printf(" ");
        }
        printf("%d", i);
    }
    printf("\n");
    return 0;
}
```

## Défi 2 - Les nombres pairs

```c
#include <stdio.h>

int main(void) {
    int i = 0;
    while (i <= 100) {
        if (i > 0) {
            printf(" ");
        }
        printf("%d", i);
        i += 2;
    }
    printf("\n");
    return 0;
}
```

## Défi 3 - Compter les voyelles d’une chaîne

```c
#include <stdio.h>

int main(void) {
    char chaine[] = "Bonjour les amis";
    int nombreVoyelles = 0;

    for (int i = 0; chaine[i] != '\0'; i++) {
        char lettre = chaine[i];
        if (lettre == 'a' || lettre == 'e' || lettre == 'i' ||
            lettre == 'o' || lettre == 'u' || lettre == 'y' ||
            lettre == 'A' || lettre == 'E' || lettre == 'I' ||
            lettre == 'O' || lettre == 'U' || lettre == 'Y') {
            nombreVoyelles++;
        }
    }

    printf("La chaîne \"%s\" contient %d voyelles.\n", chaine, nombreVoyelles);
    return 0;
}
```

## Défi 4 - Appréciation d’une note

```c
#include <stdio.h>

int main(void) {
    int note = 14;
    printf("Note : %d\n", note);
    if (note < 0 || note > 20) {
        printf("Appréciation : Note invalide\n");
    } else if (note < 10) {
        printf("Appréciation : À retravailler\n");
    } else if (note <= 11) {
        printf("Appréciation : Passable\n");
    } else if (note <= 13) {
        printf("Appréciation : Assez bien\n");
    } else if (note <= 15) {
        printf("Appréciation : Bien\n");
    } else {
        printf("Appréciation : Très bien\n");
    }
    return 0;
}
```

## Défi 5 - Compter les éléments d’un tableau

```c
#include <stdio.h>

int main(void) {
    int valeurs[] = {3, 8, 1, 6, 4, 9};
    int nombreElements = (int)(sizeof valeurs / sizeof valeurs[0]);

    printf("Le tableau contient %d éléments.\n", nombreElements);
    return 0;
}
```

## Défi 6 - Dessiner un triangle

```c
#include <stdio.h>

int main(void) {
    for (int ligne = 1; ligne <= 5; ligne++) {
        for (int colonne = 1; colonne <= ligne; colonne++) {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
```

## Défi 7 - Rectangle et carré

```c
#include <stdio.h>

int main(void) {
    printf("Rectangle :\n");
    for (int ligne = 0; ligne < 3; ligne++) {
        for (int colonne = 0; colonne < 8; colonne++) {
            printf("*");
        }
        printf("\n");
    }

    printf("Carré :\n");
    for (int ligne = 0; ligne < 4; ligne++) {
        for (int colonne = 0; colonne < 4; colonne++) {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
```

## Défi 8 - Calculs sur un tableau

```c
#include <stdio.h>

int main(void) {
    int valeurs[] = {4, 7, 2, 9, 3};
    int taille = (int)(sizeof valeurs / sizeof valeurs[0]);
    int somme = 0;

    printf("Valeurs :");
    for (int i = 0; i < taille; i++) {
        printf(" %d", valeurs[i]);
        somme += valeurs[i];
    }
    printf("\nSomme : %d\n", somme);
    printf("Moyenne : %.2f\n", (double)somme / taille);
    return 0;
}
```

## Défi 9 - Parcourir un tableau à deux dimensions

```c
#include <stdio.h>

int main(void) {
    int valeurs[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int somme = 0;

    for (int ligne = 0; ligne < 2; ligne++) {
        for (int colonne = 0; colonne < 3; colonne++) {
            if (colonne > 0) {
                printf(" ");
            }
            printf("%d", valeurs[ligne][colonne]);
            somme += valeurs[ligne][colonne];
        }
        printf("\n");
    }
    printf("Somme : %d\n", somme);
    return 0;
}
```

## Défi 10 - FizzBuzz

```c
#include <stdio.h>

int main(void) {
    for (int i = 1; i <= 20; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            printf("FizzBuzz\n");
        } else if (i % 3 == 0) {
            printf("Fizz\n");
        } else if (i % 5 == 0) {
            printf("Buzz\n");
        } else {
            printf("%d\n", i);
        }
    }
    return 0;
}
```

## Défi 11 - Un mot palindrome

```c
#include <stdio.h>

void is_palindrome(const char chaine[]) {
    int longueur = 0;
    while (chaine[longueur] != '\0') {
        longueur++;
    }

    int gauche = 0;
    int droite = longueur - 1;
    while (gauche < droite) {
        if (chaine[gauche] != chaine[droite]) {
            printf("%s n'est pas un palindrome.\n", chaine);
            return;
        }
        gauche++;
        droite--;
    }

    printf("%s est un palindrome.\n", chaine);
}
```


