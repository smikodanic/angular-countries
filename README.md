# angular-countries
> Angular module to create selectable country list with country ISO codes and dialing codes.

## 1. Installation
`npm install angular-countries`

## 2. Description
A list of countries for Angular apps.
- fast and easy to integrate module
- country names
- country ISO codes
- country dialing numbers

Country is selectable as you type.

![angular-countries](https://raw.githubusercontent.com/smikodanic/angular-countries/master/angular-countries.png "Selectable country list")


## 3. JSON Format
Countries are in JSON format.

```json
[
{
"name": "Afghanistan",
"dial_code": "+93",
"code": "AF"
},
{
"name": "Aland Islands",
"dial_code": "+358",
"code": "AX"
},
{
"name": "Albania",
"dial_code": "+355",
"code": "AL"
},
{
"name": "Algeria",
"dial_code": "+213",
"code": "DZ"
},
{
"name": "AmericanSamoa",
"dial_code": "+1684",
"code": "AS"
},
{
"name": "Andorra",
"dial_code": "+376",
"code": "AD"
}



]
```


## 4. Angular Directive
Directive is **ngcountries** and must be applied with INPUT tag:

```html
<input type="text" list="countrylist" class="form-control" ng-model="userDoc.country">
<ngcountries></ngcountries>
```
*Notice:* This directive will produce [datalist](http://www.w3schools.com/tags/tag_datalist.asp) tag.

## 5. Usage

### If you use browserify in your angular project

```javascript
require('angular-countries');

var clientApp = angular.module('clientApp', [
    'ngCountries'
]);
```

### If you use compiled version (/dist/ folder) include it in HTML file

```html
<script src="... /angular-countries/dist/js/ngCountries.js"></script>
```


## 6. Complete bootstrap code
Just copy & paste .

```html
<div class="form-group">
	<label for="country" class="col-sm-2 control-label">Country</label>
	<div class="col-sm-2">
		<input type="text" list="countrylist" class="form-control" ng-model="userDoc.country">
		<ngcountries></ngcountries>
	</div>
</div>
```


## 7. Licence
*Copyright (c) 2016 Saša Mikodanić*

Licensed under [MIT](https://opensource.org/licenses/MIT) .


