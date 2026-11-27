# Fiche résumé - paramètres de fonction en C

## Passage par valeur

    void mettreAZero(int nombre) {
        nombre = 0;
    }

    int score;
    score = 7;
    mettreAZero(score);

score vaut toujours 7 : nombre est une copie locale. À la fin de la fonction, cette copie disparaît.

## Modifier la variable appelante avec son adresse

    void ajouterUn(int *nombre) {
        *nombre = *nombre + 1;
    }

    int score;
    score = 10;
    ajouterUn(&score);

&score fournit l’adresse de score. Le paramètre int *nombre reçoit une copie de cette adresse. *nombre donne accès à l’entier d’origine, qui devient 11.

En C, tous les arguments sont transmis par valeur. L’expression « passage par référence » décrit souvent l’effet obtenu en transmettant une adresse; ce n’est pas un mécanisme de référence natif du langage.

## Tableaux en paramètres

    int somme(const int valeurs[], int taille);

Le tableau est reçu comme l’adresse de sa première case. La fonction ne reçoit pas sa longueur : ajoute un paramètre taille.

Pour une matrice à trois colonnes, le paramètre peut être écrit :

    int sommeMatrice(int valeurs[][3], int nombreLignes);

## Changer le pointeur de l’appelant

Un paramètre int * permet de modifier l’objet pointé. Pour remplacer le pointeur de l’appelant, transmets son adresse dans un int **.

## Repères rapides

- argument int → la fonction reçoit une copie de l’entier
- argument &x avec paramètre int * → la fonction peut modifier x via *p
- argument &p avec paramètre int ** → la fonction peut changer la cible de p
- tableau reçu par fonction → transmettre également sa taille

Cours détaillé : [cours-passage-parametres-c.html](cours-passage-parametres-c.html)  
Exercices : [défis 14 à 21](defis-pointeurs-c.html#defi-14)
