
(function () {
    'use strict';

    angular.module('MenuApp')
          .component('items', {
            templateUrl: 'src/categories/templates/items.template.html',
            bindings: {
              items: '<'
            }
          });

})();
