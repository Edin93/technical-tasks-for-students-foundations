# Fiche résumé - pointeurs en C

## Adresse et valeur pointée

    int score;
    int *p;

    score = 42;
    p = &score;

- &score donne l’adresse de score
- p contient cette adresse
- *p accède à la valeur de score
- *p = 50 modifie score

L’astérisque dans int *p déclare un pointeur. Dans *p = 50, il déréférence le pointeur.

## Sécurité

    int *p;
    p = NULL;

NULL signifie que p ne désigne pas une case utilisable. Ne lis ni n’écris jamais *p tant que p n’a pas reçu l’adresse d’un objet valide qui existe toujours.

## Pointeur dans un tableau

    int nombres[3] = {10, 20, 30};
    int *p;
    p = nombres;

- p + 1 désigne l’élément suivant
- *(p + i) lit la valeur à l’indice i
- Reste dans les limites du tableau

## Pointeur vers pointeur

    int valeur;
    int *p;
    int **pp;

    valeur = 42;
    p = &valeur;
    pp = &p;

pp désigne p; *pp est p; **pp est la valeur 42. Un int ** est utile si une fonction doit modifier le pointeur de l’appelant.

## Erreurs à éviter

- Déréférencer un pointeur non initialisé ou NULL
- Confondre une adresse avec la valeur stockée à cette adresse
- Utiliser le mauvais nombre d’astérisques

Cours détaillé : [cours-pointeurs-c.html](cours-pointeurs-c.html)  
Exercices : [défis 13, 18, 20 et 21](defis-pointeurs-c.html#defi-13)
