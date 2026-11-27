# Fiche résumé - chaînes de caractères en C

## Une chaîne est un tableau de caractères terminé

    char mot[] = "chat";

Les caractères occupent les indices 0 à 3. La case suivante contient le caractère nul '\0'. Il marque la fin et n’est pas imprimé comme une lettre. Il faut donc cinq cases pour stocker les quatre lettres de « chat ».

- %s affiche une chaîne terminée par '\0'
- %c affiche un seul caractère
- strlen(mot), avec <string.h>, compte les caractères sans '\0'

## Tableau de caractères et pointeur

Tableau modifiable :

    char mot[] = "chat";
    mot[0] = 'C';

Pointeur qui lit une chaîne littérale :

    const char *texte = "chat";

Le tableau contient les caractères. Le pointeur contient une adresse. Ne modifie pas une chaîne littérale. Utilise const char * si tu dois seulement la lire.

## Parcourir jusqu’à la fin

Avec un indice :

    int i;
    for (i = 0; mot[i] != '\0'; i++) {
        printf("%c", mot[i]);
    }

Avec un pointeur :

    const char *p;
    p = "C facile";
    while (*p != '\0') {
        printf("%c", *p);
        p++;
    }

- p : adresse du caractère courant
- *p : caractère à cette adresse
- p++ : avancer au caractère suivant

## Erreurs à éviter

- Oublier l’espace pour le '\0'
- Lire au-delà de la fin de la chaîne
- Écrire dans un texte littéral
- Confondre le pointeur p et le caractère *p

Cours détaillé : [cours-chaines-c.html](cours-chaines-c.html)  
Exercices : [défis 8 à 12](defis-pointeurs-c.html#defi-08)
