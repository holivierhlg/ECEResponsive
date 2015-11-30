Envoyez l'évaluation en ligne sur le campus, avec les noms de votre groupe

Heure limite : **12h30** 
Les évaluations rendus au-delà ne sont pas acceptées

### HTML5 
_4 points_
***
* Déclarer le DOCTYPE, le charset UTF-8, le titre, 1 feuilles de styles (`custom.css` par exemple), 1 fichiers javascript (`app.js` par exemple)
* Mettre en place la structure HTML correspondante aux maquette **en utilisant les balises HTML5** (header, main, figure, article, section)
* Choisir la hiérarchie de titre adéquat selon la spécification HTML5 (h1, h2, etc.)
* Utiliser les nouveaux attributs de form HTML5 (required, placeholder, autofocus) et les nouveaux types de champs pour la recherche et le slider de prix

### CSS3 & Framework CSS (Bootstrap)
_4 points_
***
* Mettre en place le design correspondant aux maquettes **en utilisant autant que possible le framework Bootstrap 3**
 * Les largeurs doivent être définies avec les classes `container-fluid`, `row`, `col-md-X`, `col-xs-X`, etc.
* Faire un dégradé du blanc au gris `#EFEFEF` sur l'en-tête, avec une ombre externe
* Faire un arrondi sur le champ de recherche, avec une ombre interne
* Faire une bordure arrondie autour de chaque produit
* Mettre en place les boutons `Description` et `Ajouter au panier` en utilisant les styles pré-définis de `Bootstrap 3`. Les icone sont mises en place en utilisant `Glyphicons` (Framework CSS `Bootstrap 3` également)
* Utiliser la police `Roboto` pour tous les textes

> Utiliser `<div class="clear"></div>` si necessaire

### Responsive web design
_6 points_
***
> Utiliser autant que possible le framework **Bootstrap 3** pour gérer les aspects responsive

* Rendre les images des produits promotionnelles à l'espace disponible : la taille doit varier en fonction de la taille de la fenêtre (images flexibles)
* Exprimer toutes les tailles de police dans une unitée relative plutôt qu'absolue
* Réduire automatiquement tous les textes sur tablette
* Réduire davantage automatiquement tous les textes sur mobile
* Faire une mise en page pour les tablettes / mobiles correspondant aux maquettes :
 * Mettre en place une mise en page fluide, sur toute la largeur de l'écran disponible
 * **La présentation des produits passe de 3 colonnes à 2, puis à 1 colonne en fonction de la largeur de l'écran**
 * Centrer le logo et la barre de recherche sur tablettes et mobiles
 * Masquer le bouton `Description` sur tablette / mobile
* S'assurer que la présentation est propre à n'importe quel résolution

### jQuery OU AngularJS (au choix)
_6 points_
***
* Afficher le détail du produit uniquement au clic sur le bouton `Description`
 * Si JQuery : Animation déplié / replié
 * Si AngularJS : Aucune annimation
* Afficher la valeur du slider de prix à côté du slider
* Afficher la gamme de prix et la recherche au dessus du listing des produits
* Rendre les champs de recherche opérationnels : 
 * Recherche par nom de produit (titre)
 * Recherche par prix maximum
* Afficher le nombre de produits correspondants à la recherche au dessus de la liste des produits
* Afficher "Aucun vin trouvé" si la recherche ne trouve aucune correspondance

> Conseils

* Eviter la duplication de code en jQuery
* Aucune fonction AngularJs à créer. Les directives et les filtres suffisent.


### Bonus
_4 points_
***
* Coder le CSS en utilisant Sass
* Ajouter un champs de recherche par couleur de vin


### Code snippets
***
* Liste des vins : 
 * Si JQuery : voir fichier `code/products.txt` 
 * Si AngularJS : voir fichier `code/products.js`

* jQuery : utiliser `each` pour parcourir chaque élément du DOM

```javascript
    // Example
    $('.items h3').each(function(){
        console.log($(this).text());
    });
```

 * AngularJS : Filtre par prix maximum

```javascript
// Création dans app.js
app.filter('maxFilter', function() {
	return function(items, max) {
	    var filtered = [];
	    max = parseInt(max);
	    angular.forEach(items, function(item) {
	        if(item.price <= max) {
	            filtered.push(item);
	        }
	    });
	    return filtered;
	};
});
```
```html
<!-- Utilisation dans index.html (avec prix maximum = 20€) -->
<div ng-repeat="item in items | maxFilter:20">
	...
</div>
```
