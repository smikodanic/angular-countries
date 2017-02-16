/*global angular, window*/
var countries = require('./models/countries.js');
var ngCountries = angular.module('ngCountries', []);


//controller
ngCountries.controller('ngCountriesCtrl', ['$scope', function ($scope) {
    'use strict';

    $scope.countries = countries;

    $scope.getCountryObj = function (country_name, callback) {
        // console.log('Selected: ', country_name);
        var selectedCountryObj = countries.filter(function (elem) {
            return (elem.name === country_name);
        })[0];

        callback(selectedCountryObj);
    };

}]);


ngCountries.directive('ngcountries', function () {
    'use strict';

    var ngpassportForm = {
        restrict: 'E',
        replace: true,
        controller: ['$scope', function ($scope) {
            $scope.countries = countries;
        }],
        scope: {templateUrl: '='},
        templateUrl: function (tElement, tAttrs) {
            return tAttrs.templateUrl || 'listbootstrap.html';
        }
    };

    return ngpassportForm;
});


//define default template
ngCountries.run(['$templateCache', function ($templateCache) {
    'use strict';
    $templateCache.put('listbootstrap.html', '<datalist id="countrylist"><option ng-repeat="country in countries" ng-value="country.name"></datalist>');
}]);







module.exports = ngCountries;
window.ngCountries = ngCountries;
