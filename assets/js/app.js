// cr�e un modul

var vin = angular.module('vin', []);

vin.controller('vinController', function($scope) {

<<<<<<< HEAD



=======
>>>>>>> 4b7857aab03ae3320be9d3ac1901354ab74eeea5

$scope.products = [
		{
			title: 'Chateau Vieux Bonneau',
			price: 12.50,
			year: 2007,
			type: "Rouge",
			img: "vin_1.png",
			description: {
				show: false,
				text: "Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
			}
		},
		{
			title: 'Chateau Jamard Belcour',
			price: 21.60,
			year: 2004,
			type: "Rouge",
			img: "vin_2.png",
			description: {
				show: false,
				text: "Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
			}
		},
		{
			title: 'Lalande-De-Pomerol',
			price: 45,
			year: 2003,
			type: "Rouge",
			img: "vin_3.png",
			description: {
				show: false,
				text: "Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
			}
		},
		{
			title: 'Chateau Maurac',
			price: 32,
			year: 2004,
			type: "Rouge",
			img: "vin_4.png",
			description: {
				show: false,
				text: "Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
			}
		},
		{
			title: 'Chateau La Gorce',
			price: 18.20,
			year: 2006,
			type: "Rouge",
			img: "vin_5.png",
			description: {
				show: false,
				text: "Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
			}
		},
		{
			title: 'Chateau des Merles',
			price: 15.50,
			year: 2007,
			type: "Rouge",
			img: "vin_6.png",
			description: {
				show: false,
				text: "Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
			}
		},
		{
			title: 'Chateau Beauregard Ducasse',
			price: 17,
			year: 2008,
			type: "Rouge",
			img: "vin_7.png",
			description: {
				show: false,
				text: "Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
			}
		},
		{
			title: 'Chateau Beauregard Ducasse',
			price: 9.40,
			year: 2011,
			type: "Blanc",
			img: "vin_8.png",
			description: {
				show: false,
				text: "Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
			}
		},
	];


});

vin.filter('maxFilter', function() {
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
