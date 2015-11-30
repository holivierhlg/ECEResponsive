// cr�e un modul

var pizza = angular.module('pizza', []);

pizza.controller('pizzaController', function($scope) {
		

	
	$scope.showInfos = false ;
	
	$scope.types = [
{
    name: 'Margherita',
    description: {
        body: "Tomate, mozzarella, basilic, huile d'olive",
        show: false
    },
    price: 8
},
{
    name: 'Reine',
    description: {
        body: "Mozzarella, champignons, jambon, olives, huile d'olive",
        show: false
    },
    price: 10
},
{
    name: 'Quattro stagioni',
    description: {
        body: "Tomate, mozzarella, champignons, artichaut, poivrons, basilic, huile d'olive",
        show: false
    },
    price: 12
},
{
    name: 'Sicilienne',
    description: {
        body: "Tomate, mozzarella, basilic, anchois, c�pres, champignon",
        show: false
    },
    price: 11
}
];


	$scope.pates = [
{
    name: 'Classique',
    price: 0
},
{
    name: 'Extra fine',
    price: 2
},
{
    name: 'Epaisse',
    price: 3
}
];


	$scope.extras = [
{
    name: 'Olives',
    price: 1
},
{
    name: 'Anchois',
    price: 4
},
{
    name: 'Ch�vre',
    price: 3
},
{
    name: 'Piment',
    price: 1
}
];

});

