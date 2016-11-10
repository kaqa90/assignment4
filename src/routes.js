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
          templateUrl: './src/categories/templates/home.template.html'
        })


        .state('categories', {
          url: '/categories',
          templateUrl: './src/categories/templates/categories-list.template.html',
          controller: 'CategoriesController as ctrl',
          resolve: {
            items: ['MenuDataService', function (MenuDataService) {
              return MenuDataService.getAllCategories();
            }]
          }
        })


        .state('categories.items', {
          url: '/items/{categoryShortName}',
          templateUrl: './src/categories/templates/items-list.template.html',
          controller: 'ItemsController as ctrl',
          resolve: {
            iitems: ['MenuDataService', "$stateParams", function (MenuDataService, $stateParams) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
          }
        });

      }
})();
