/*
   Developer: Charitha Hegde
 
   List of Controllers
*/


var PSPGraphControllers = angular.module("PSPGraphControllers",['ngAnimate']);

PSPGraphControllers.controller('ListController', ['$scope','$http', 
	function($scope, $http)
		{    
			$http.get('js/listData.json').success (function(data){
				
			    $scope.choiceList = data;
				
			}); 
		}]
);

PSPGraphControllers.controller('TabsCtrl',['$scope','$http',
    function($scope,$http)
        {
            var self = this;
            self.tab = 1;
            self.selectTab = function (setTab){
    	       self.tab = setTab;
            };
            self.isSelected = function(checkTab) {
    	       return self.tab === checkTab;
            };
            $scope.graphData=[
                {
                    "key": "Mango",
                    "values": [ ['Mango' , 10] ]
                },
                 {
                    "key": "Nirvana",
                    "values": [ ['Nirvana' , 20] ]
                },
            
                 {
                    "key": "Ruby",
                    "values": [ ['Ruby', 30] ]
                },
            
                 {
                    "key": "Blaze",
                    "values": [ ['Blaze' , 10] ]
                }
            
            
            ];
    
    }]
);