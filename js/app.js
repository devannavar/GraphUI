/*

Developer: Charitha Hegde

*/

var PspApp = angular.module('PspDm',['ngRoute','PSPGraphControllers','nvd3ChartDirectives']);

PspApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'components/choice_list.html',
    controller: 'ListController'

  }).
  when('/choice/:choiceID', {
    templateUrl: 'components/detail_tab.html',
    controller: 'TabsCtrl'

  }).
  otherwise({
    redirectTo: '/list'

  });
}]);