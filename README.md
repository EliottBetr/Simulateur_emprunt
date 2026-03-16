# Simulateur d'Emprunt Bancaire

Ce projet est une application web interactive développée dans le cadre d'un projet universitaire (TD N°2-2 - Management Avancé des Systèmes d'Information). [cite_start]L'objectif est de permettre aux utilisateurs de tester différentes options de financement pour un investissement de manière simple et intuitive, sans nécessiter de connaissances préalables en finance ou en informatique.

## Fonctionnalités

Le simulateur génère automatiquement un tableau d'amortissement détaillé en fonction des paramètres saisis par l'utilisateur[cite: 145]:
* **Montant de l'emprunt** ($V_0$)
* **Taux d'intérêt annuel** ($i$)
* **Durée du prêt** (en années)
* **Périodicité des remboursements** : mensuelle, trimestrielle, semestrielle ou annuelle
* **Mode de calcul** : au choix entre **Annuités constantes** ou **Amortissements constants**

## Mathématiques Financières Appliquées

Le programme intègre les formules mathématiques suivantes pour garantir des calculs rigoureux :

1.  **Calcul des taux équivalents** (et non proportionnels) pour les périodes infra-annuelles : 
    $i_p = (1+i_a)^{1/k} - 1$
2.  **Calcul de l'annuité constante**: 
    $a = V_0 \times \frac{i}{1 - (1+i)^{-n}}$
3.  **Calcul de l'amortissement constant** :
    $A = \frac{V_0}{n}$

## Technologies Utilisées

* **HTML5** : Structure sémantique de l'application.
* **CSS3** : Mise en page responsive et design épuré pour une meilleure accessibilité.
* **JavaScript (Vanilla)** : Logique de calcul dynamique et manipulation du DOM pour générer le tableau d'emprunt en temps réel.

## Installation et Utilisation

Ce projet est une "Single Page Application" statique. Aucune installation complexe n'est requise.

1.  Clonez ce dépôt ou téléchargez le code source.
2.  Ouvrez le fichier `index.html` directement dans votre navigateur web préféré.
3.  Saisissez vos paramètres de prêt et cliquez sur "Générer le tableau".

## Auteur

Réalisé dans le cadre des Travaux Dirigés de Systèmes d'Information Financiers.

- Eliott
- Anthony
