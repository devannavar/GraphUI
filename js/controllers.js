/*
   Developer: Charitha Hegde
 
   List of Controllers
*/


var PSPGraphControllers = angular.module("PSPGraphControllers",['ngAnimate','ngDialog']);

PSPGraphControllers.controller('ListController', ['$scope','$http', 
	function($scope, $http)
		{    
			$http.get('js/listData.json').success (function(data){
				
			    $scope.choiceList = data;
				
			}); 
		}]
);

PSPGraphControllers.controller('TabsCtrl',['$scope','$http','ngDialog',
    function($scope,$http,ngDialog)
        {
            var self = this;
            self.tab = 1;
            
            self.selectTab = function (setTab){
    	       self.tab = setTab;
            };
            
            self.isSelected = function(checkTab) {
    	       return self.tab === checkTab;
            };
            
            self.openDialog = function(){
            
            var innerHTML =$('#graphId1').html();
            console.info(innerHTML);
                               ngDialog.open({template:'<div>'+innerHTML+'</div>',
                          plain:true}
                         );
            };
            
            
            
            $scope.xAxisTickFormat = function(){
                a = ['VMP','Direct Deposit','Workers comp','Assisted'];
                return function(d){
                    console.log(d);
                    return a[d];
                }
            };

            $scope.toolTipContentFunction = function(){
                return function(key, x, y, e, graph) {
                    console.log('tooltip content');
                    return  'Super New Tooltip' +
                            '<h1>' + key + '</h1>' +
                            '<p>' +  y + ' at ' + x + '</p>'
                }
            };
            
            
            
            //This has to be replaced by actual service call.
            
            $scope.graphData=[
                {   
                    "header":"Version Based Distribution"
                
                    ,"data" :[
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
            
            
            ]},{
                "header":"SKU Based Distribution",
                
                "data":[
                {
                    "key": "Pro",
                    "values": [ ['Pro' , 100] ]
                },
                 {
                    "key": "Premier",
                    "values": [ ['Premier' , 20] ]
                },
            
                 {
                    "key": "Enterprise",
                    "values": [ ['Enterprise', 30] ]
                },
            
                 {
                    "key": "Accountant",
                    "values": [ ['Accountant' , 10] ]
                }
            
            
            ]}];
            
            $scope.graphDataForPayroll = 
                [{   
                    "header":"Number Of Payrolls run by different customers"
                
                    ,"data" :[
                {
                    "key": "Mango",
                    "values": [ ['Mango' , 100] ]
                },
                 {
                    "key": "Nirvana",
                    "values": [ ['Nirvana' , 50] ]
                },
            
                 {
                    "key": "Ruby",
                    "values": [ ['Ruby', 350] ]
                },
            
                 {
                    "key": "Blaze",
                    "values": [ ['Blaze' , 610] ]
                }
            
            
            ]},{
                "header":"Number Of Payrolls run by different SKU customers",
                
                "data":[
                {
                    "key": "Pro",
                    "values": [ ['Pro' , 70] ]
                },
                 {
                    "key": "Premier",
                    "values": [ ['Premier' , 220] ]
                },
            
                 {
                    "key": "Enterprise",
                    "values": [ ['Enterprise', 300] ]
                },
            
                 {
                    "key": "Accountant",
                    "values": [ ['Accountant' , 110] ]
                }]
            }, 
                {   
                    "header":"Top Five companies running Payroll"
                
                    ,"data" :[
                {
                    "key": "Ubersystem",
                    "values": [ ['Ubersystem' , 100] ]
                },
                 {
                    "key": "loyola informatics",
                    "values": [ ['loyola informatics' , 50] ]
                },
            
                 {
                    "key": "Kinect Informatics",
                    "values": [ ['Kinect Informatics', 350] ]
                },
            
                 {
                    "key": "Viskal ploters",
                    "values": [ ['Viskal ploters' , 610] ]
                },
                {
                    "key": "type 2",
                    "values": [ ['type 2' , 610] ]
                }
                
            
            
            ]},{
                "header":"State Of Payrolls Processed",
                
                "data":[
                {
                    "key": "Voided",
                    "values": [ ['Voided' , 700] ]
                },
                 {
                    "key": "Executed",
                    "values": [ ['Executed' , 220] ]
                },
            
                 {
                    "key": "Pending",
                    "values": [ ['Pending', 300] ]
                },
            
                 {
                    "key": "Rejected",
                    "values": [ ['Rejected' , 110] ]
                }
            
            
            ]}
        ]
        $scope.PayrollServiceData = [{
                "header":"Payroll Services Used Based On SKU",
                "data":[{
                    "key": "Pro",
                    "values": [ [ 0, 10] , [ 1 , 10] , [ 2 , 10] , [ 3 , 11] ]
                },
                {
                    "key": "Premier",
                    "values": [ [ 0, 10] , [ 1, 30] , [ 2 , 20] , [ 3, 20] ]
                },
                {
                    "key": "Enterprise",
                    "values": [ [ 0 , 60] , [ 1, 17] , [ 2, 20] ,[3,60]]
                }]
                                     },
                {
                "header":"Payroll Services Used Based On QB Version",
                "data":[{
                    "key": "Mango",
                    "values": [ [ 0, 10] , [ 1 , 10] , [ 2 , 10] , [ 3 , 11] ]
                },
                {
                    "key": "Ruby",
                    "values": [ [ 0, 10] , [ 1, 30] , [ 2 , 20] , [ 3, 20] ]
                },
                {
                    "key": "Blaze",
                    "values": [ [ 0 , 60] , [ 1, 17] , [ 2, 20] ,[3,60]]
                },
                {
                    "key": "Nirvana",
                    "values": [ [ 0 , 60] , [ 1, 17] , [ 2, 20] ,[3,60]]
                }
                       ]
                                     }];
        
            $scope.graphDataMoneyMovement =[
                {   
                    "header":"Version Based Distribution"
                
                    ,"data" :[
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
            
            
            ]},{
                "header":"SKU Based Distribution",
                
                "data":[
                {
                    "key": "Pro",
                    "values": [ ['Pro' , 100] ]
                },
                 {
                    "key": "Premier",
                    "values": [ ['Premier' , 20] ]
                },
            
                 {
                    "key": "Enterprise",
                    "values": [ ['Enterprise', 30] ]
                },
            
                 {
                    "key": "Accountant",
                    "values": [ ['Accountant' , 10] ]
                }
            
            
            ]},
            {
                "header":"Top Companys For Money Movement",
                
                "data":[
                {
                    "key": "abcd",
                    "values": [ ['Pro' , 100] ]
                },
                 {
                    "key": "def",
                    "values": [ ['Premier' , 20] ]
                },
            
                 {
                    "key": "kil",
                    "values": [ ['Enterprise', 30] ]
                },
            
                 {
                    "key": "pqrl",
                    "values": [ ['Accountant' , 10] ]
                }
            
            
            ]}
            ,
            {
                "header":"Top Companys For Money Movement",
                
                "data":[
                {
                    "key": "DIY",
                    "values": [ ['Pro' , 100] ]
                },
                 {
                    "key": "Assisted",
                    "values": [ ['Premier' , 20] ]
                }
            
            
            ]}
            ];
            
            
    }]
                               

);