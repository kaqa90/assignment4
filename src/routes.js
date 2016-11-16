(function () {
      'use strict';

      angular.module('MenuApp')
          .config(RoutesConfig);

      RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
      function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'src/categories/templates/home.template.html'
          })

          .state('categories', {
            url: '/categories',
            templateUrl: 'src/categories/templates/main-categories.template.html',
            controller: 'CategoriesController as ctrl',
            resolve: {
              items: ['MenuDataService', function (MenuDataService) {
                return MenuDataService.getAllCategories();
              }]
            }
          })

          .state('categories.items', {
            url: '/items/{categoryShortName}',
            templateUrl: 'src/categories/templates/main-items.template.html',
            controller: 'ItemsController as ctrl',
            resolve: {
              items: ['MenuDataService', "$stateParams", function (MenuDataService, $stateParams) {
                return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
              }]
            }
          });
      }
})();
