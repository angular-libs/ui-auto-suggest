'use strict';

/**
 * @ngdoc overview
 * @name uiAutoSuggestApp
 * @description
 * # uiAutoSuggestApp
 *
 * Main module of the application.
 */
angular
  .module('uiAutoSuggestApp', []);

'use strict';

/**
 * @ngdoc function
 * @name uiAutoSuggestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uiAutoSuggestApp
 */
angular.module('uiAutoSuggestApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
