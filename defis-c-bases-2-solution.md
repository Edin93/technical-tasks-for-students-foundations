# Corrigé - Défis C : bases, conditions, boucles et fonctions

## Exercice 01 - Compter de 0 à 10

```c
#include <stdio.h>

int main(void) {
    int nombre;
    int premier = 1;

    for (nombre = 0; nombre <= 10; nombre++) {
        if (!premier) {
            printf(" ");
        }
        printf("%d", nombre);
        premier = 0;
    }
    printf("\n");
    return 0;
}
```

## Exercice 02 - Compter de 50 à 100

```c
#include <stdio.h>

int main(void) {
    int nombre;
    int premier = 1;

    for (nombre = 50; nombre <= 100; nombre++) {
        if (!premier) {
            printf(" ");
        }
        printf("%d", nombre);
        premier = 0;
    }
    printf("\n");
    return 0;
}
```

## Exercice 03 - Afficher l’alphabet

```c
#include <stdio.h>

int main(void) {
    char lettre;

    lettre = 'a';
    while (lettre <= 'z') {
        printf("%c", lettre);
        lettre++;
    }
    printf("\n");
    return 0;
}
```

## Exercice 04 - Afficher un entier

```c
#include <stdio.h>

int main(void) {
    int nombre;

    nombre = 42;
    printf("Nombre : %d\n", nombre);
    return 0;
}
```

## Exercice 05 - Afficher un long int

```c
#include <stdio.h>

int main(void) {
    long int distance;

    distance = 1234567890L;
    printf("Distance : %ld\n", distance);
    return 0;
}
```

## Exercice 06 - Afficher un nombre décimal

```c
#include <stdio.h>

int main(void) {
    float prix;

    prix = 12.5f;
    printf("Prix : %.2f\n", prix);
    return 0;
}
```

## Exercice 07 - Afficher un caractère et une chaîne

```c
#include <stdio.h>

int main(void) {
    char initiale;
    char prenom[] = "Marie";

    initiale = 'M';
    printf("Initiale : %c\n", initiale);
    printf("Prénom : %s\n", prenom);
    return 0;
}
```

## Exercice 08 - Garder une valeur constante

```c
#include <stdio.h>

int main(void) {
    const int LIMITE = 10;

    printf("Limite : %d\n", LIMITE);
    return 0;
}
```

## Exercice 09 - Pair ou impair

```c
#include <stdio.h>

int main(void) {
    int nombre;

    nombre = 14;
    if (nombre % 2 == 0) {
        printf("%d est pair.\n", nombre);
    } else {
        printf("%d est impair.\n", nombre);
    }
    return 0;
}
```

## Exercice 10 - Positif, négatif ou nul

```c
#include <stdio.h>

int main(void) {
    int nombre;

    nombre = -3;
    if (nombre > 0) {
        printf("%d est positif.\n", nombre);
    } else if (nombre < 0) {
        printf("%d est négatif.\n", nombre);
    } else {
        printf("Le nombre est nul.\n");
    }
    return 0;
}
```

## Exercice 11 - Appréciation d’une note

```c
#include <stdio.h>

int main(void) {
    int note;

    note = 15;
    printf("Note : %d\n", note);
    if (note < 10) {
        printf("Appréciation : Insuffisant\n");
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

## Exercice 12 - Trouver le maximum de trois nombres

```c
#include <stdio.h>

int main(void) {
    int a;
    int b;
    int c;
    int maximum;

    a = 8;
    b = 12;
    c = 5;
    maximum = a;
    if (b > maximum) {
        maximum = b;
    }
    if (c > maximum) {
        maximum = c;
    }
    printf("Maximum : %d\n", maximum);
    return 0;
}
```

## Exercice 13 - Calculer une somme avec for

```c
#include <stdio.h>

int main(void) {
    int nombre;
    int somme;

    somme = 0;
    for (nombre = 1; nombre <= 10; nombre++) {
        somme += nombre;
    }
    printf("Somme : %d\n", somme);
    return 0;
}
```

## Exercice 14 - Compte à rebours avec while

```c
#include <stdio.h>

int main(void) {
    int nombre;

    nombre = 5;
    while (nombre >= 1) {
        printf("%d\n", nombre);
        nombre--;
    }
    printf("Partez !\n");
    return 0;
}
```

## Exercice 15 - Répéter avec do while

```c
#include <stdio.h>

int main(void) {
    int nombre;

    nombre = 1;
    do {
        printf("%d\n", nombre);
        nombre++;
    } while (nombre <= 5);
    return 0;
}
```

## Exercice 16 - Ignorer les multiples de trois

```c
#include <stdio.h>

int main(void) {
    int nombre;
    int premier;

    premier = 1;
    for (nombre = 1; nombre <= 10; nombre++) {
        if (nombre % 3 == 0) {
            continue;
        }
        if (!premier) {
            printf(" ");
        }
        printf("%d", nombre);
        premier = 0;
    }
    printf("\n");
    return 0;
}
```

## Exercice 17 - Arrêter une boucle avec break

```c
#include <stdio.h>

int main(void) {
    int nombre;
    int premier;

    premier = 1;
    for (nombre = 1; nombre <= 10; nombre++) {
        if (nombre > 7) {
            break;
        }
        if (!premier) {
            printf(" ");
        }
        printf("%d", nombre);
        premier = 0;
    }
    printf("\n");
    return 0;
}
```

## Exercice 18 - Afficher les nombres pairs avec while

```c
#include <stdio.h>

int main(void) {
    int nombre;
    int premier;

    nombre = 0;
    premier = 1;
    while (nombre <= 20) {
        if (!premier) {
            printf(" ");
        }
        printf("%d", nombre);
        premier = 0;
        nombre += 2;
    }
    printf("\n");
    return 0;
}
```

## Exercice 19 - Table de multiplication

```c
#include <stdio.h>

int main(void) {
    int multiplicateur;

    for (multiplicateur = 1; multiplicateur <= 5; multiplicateur++) {
        printf("6 x %d = %d\n", multiplicateur, 6 * multiplicateur);
    }
    return 0;
}
```

## Exercice 20 - Dessiner un rectangle

```c
#include <stdio.h>

int main(void) {
    int ligne;
    int colonne;

    for (ligne = 0; ligne < 3; ligne++) {
        for (colonne = 0; colonne < 7; colonne++) {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
```

## Exercice 21 - Dessiner un carré

```c
#include <stdio.h>

int main(void) {
    int ligne;
    int colonne;

    for (ligne = 0; ligne < 4; ligne++) {
        for (colonne = 0; colonne < 4; colonne++) {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
```

## Exercice 22 - Dessiner un triangle

```c
#include <stdio.h>

int main(void) {
    int ligne;
    int colonne;

    for (ligne = 1; ligne <= 5; ligne++) {
        for (colonne = 1; colonne <= ligne; colonne++) {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
```

## Exercice 23 - Dessiner un triangle inversé

```c
#include <stdio.h>

int main(void) {
    int ligne;
    int colonne;

    for (ligne = 5; ligne >= 1; ligne--) {
        for (colonne = 1; colonne <= ligne; colonne++) {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
```

## Exercice 24 - FizzBuzz de 1 à 15

```c
#include <stdio.h>

int main(void) {
    int nombre;

    for (nombre = 1; nombre <= 15; nombre++) {
        if (nombre % 3 == 0 && nombre % 5 == 0) {
            printf("FizzBuzz\n");
        } else if (nombre % 3 == 0) {
            printf("Fizz\n");
        } else if (nombre % 5 == 0) {
            printf("Buzz\n");
        } else {
            printf("%d\n", nombre);
        }
    }
    return 0;
}
```

## Exercice 25 - Reconnaître un palindrome

```c
#include <stdio.h>

int main(void) {
    char mot[] = "radar";
    int longueur;
    int gauche;
    int droite;
    int palindrome;

    longueur = 0;
    while (mot[longueur] != '\0') {
        longueur++;
    }
    gauche = 0;
    droite = longueur - 1;
    palindrome = 1;
    while (gauche < droite) {
        if (mot[gauche] != mot[droite]) {
            palindrome = 0;
            break;
        }
        gauche++;
        droite--;
    }

    if (palindrome) {
        printf("%s est un palindrome.\n", mot);
    } else {
        printf("%s n'est pas un palindrome.\n", mot);
    }
    return 0;
}
```

## Exercice 26 - Fonction sans paramètre et sans retour

```c
#include <stdio.h>

void afficherBonjour(void) {
    printf("Bonjour !\n");
}

int main(void) {
    afficherBonjour();
    return 0;
}
```

## Exercice 27 - Fonction void avec un paramètre entier

```c
#include <stdio.h>

void afficherDouble(int nombre) {
    printf("Double : %d\n", nombre * 2);
}

int main(void) {
    afficherDouble(6);
    return 0;
}
```

## Exercice 28 - Fonction void avec un paramètre caractère

```c
#include <stdio.h>

void afficherLettre(char lettre) {
    printf("Lettre : %c\n", lettre);
}

int main(void) {
    afficherLettre('Z');
    return 0;
}
```

## Exercice 29 - Fonctions qui renvoient un entier

```c
#include <stdio.h>

int obtenirDix(void) {
    return 10;
}

int additionner(int a, int b) {
    return a + b;
}

int main(void) {
    printf("Valeur : %d\n", obtenirDix());
    printf("Somme : %d\n", additionner(3, 4));
    return 0;
}
```

## Exercice 30 - Fonctions qui renvoient un caractère

```c
#include <stdio.h>

char obtenirInitiale(void) {
    return 'M';
}

char mettreEnMajuscule(char lettre) {
    if (lettre >= 'a' && lettre <= 'z') {
        return (char)(lettre - 'a' + 'A');
    }
    return lettre;
}

int main(void) {
    printf("Initiale : %c\n", obtenirInitiale());
    printf("Majuscule : %c\n", mettreEnMajuscule('a'));
    return 0;
}
```

## Quiz final - Corrigé

1. Vrai - `%ld` sert à afficher un `long int`
2. Faux - un caractère s’écrit entre apostrophes simples, comme `'A'`
3. Vrai - `const` indique que la variable ne doit pas être modifiée
4. Vrai - le premier indice d’un tableau vaut 0
5. Vrai - le reste de la division par 2 vaut 0 pour un nombre pair
6. Vrai - la condition d’un `while` est vérifiée avant le premier tour
7. Vrai - le test de `do while` arrive après le premier tour
8. Vrai - `break` quitte la boucle la plus proche
9. Faux - `continue` passe à l’itération suivante
10. Faux - `void afficher(void)` ne prend aucun paramètre et ne renvoie aucune valeur

Barème : 1 point par bonne réponse, soit 10 points au total.
