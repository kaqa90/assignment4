(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/categories/templates/home.template.html'
  })


  .state('categories', {
    url: '/categories',
    templateUrl: 'src/categories/templates/categories.template.html',
    controller: 'MainShoppingListController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })


  .state('categories.items', {

    templateUrl: 'src/categories/templates/items.template.html',
    controller: 'ItemDetailController as itemDetail',
    params: {
      itemId: null
    }
  });

}

})();
