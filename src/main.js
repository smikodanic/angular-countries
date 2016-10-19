/*global angular, window*/
var countries = require('./models/countries.js');
var ngCountries = angular.module('ngCountries', []);


ngCountries.directive('ngcountries', function () {
    'use strict';

    var ngpassportForm = {
        restrict: 'E',
        replace: true,
        controller: function ($scope) {
            $scope.countries = countries;

        },
        scope: {templateUrl: '='},
        templateUrl: function (tElement, tAttrs) {
            return tAttrs.templateUrl || 'listbootstrap.html';
        }
    };

    return ngpassportForm;
});


//define default template
ngCountries.run(function ($templateCache) {
    'use strict';
    $templateCache.put('listbootstrap.html', '<datalist id="countrylist"><option ng-repeat="country in countries" ng-value="country.name"></datalist>');
});




module.exports = ngCountries;
window.ngCountries = ngCountries;
