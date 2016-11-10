
(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('CategoriesPath', "https://davids-restaurant.herokuapp.com");



  MenuDataService.$inject = ['$http', 'CategoriesPath'];
  function MenuDataService('$http', CategoriesPath) {

    var service = this;

    service.getAllCategories = function () {
      var response = $http({
        method: "GET",
        url: (CategoriesPath + "/categories.json")
      });

      return response;
    };

    service.getItemsForCategory = function (categoryShortName) {
      var response = $http({
        method: "GET",
        url: (CategoriesPath + "/menu_items.json"),
        params: {
          category: categoryShortName
        }
      });

      return response;
    };
}

})();
