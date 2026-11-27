# Fiche résumé - tableaux en C

## Tableau simple

Un tableau regroupe un nombre connu de valeurs du même type. Les indices commencent à zéro.

    #define TAILLE 4
    int notes[TAILLE] = {12, 15, 9, 18};

- Première valeur : notes[0]
- Dernière valeur : notes[TAILLE - 1]
- Indices valides : 0 à TAILLE - 1
- Un tableau C ne connaît pas automatiquement sa longueur

Pour parcourir toutes les cases :

    int i;
    for (i = 0; i < TAILLE; i++) {
        printf("%d ", notes[i]);
    }

## Tableau à deux dimensions

Une matrice utilise un indice de ligne et un indice de colonne :

    #define LIGNES 2
    #define COLONNES 3
    int grille[LIGNES][COLONNES] = {
        {1, 2, 3},
        {4, 5, 6}
    };

grille[1][2] vaut 6 : ligne d’indice 1, colonne d’indice 2.

- Boucle extérieure : lignes
- Boucle intérieure : colonnes
- Dans une fonction, indique le nombre de colonnes, par exemple int valeurs[][3]

## Tableau comme paramètre

Un paramètre tableau ne transporte pas sa longueur. Transmets-la séparément :

    int somme(const int valeurs[], int taille);

const signifie que la fonction ne doit pas modifier les éléments via ce paramètre.

## Erreurs à éviter

- Commencer les indices à 1
- Utiliser i <= taille et lire une case hors limites
- Oublier de transmettre la taille à une fonction
- Confondre le nombre de cases avec le dernier indice

Cours détaillé : [cours-tableaux-c.html](cours-tableaux-c.html)  
Exercices : [défis 1 à 7, 17 et 19](defis-pointeurs-c.html#defi-01)
